import { useBlogDetails } from "@core/tanstack-hooks/Blogs/BlogDetails";
import Badge from "@coreComps/Badge";
import Flex from "@coreComps/divisions/Flex";
import { useParams } from "react-router-dom";
import { FaThumbsUp, FaStar } from "react-icons/fa";

// import LeftDetailSection from "./LeftDetailsSection";
function BlogDetail() {
  const { id } = useParams();

  const { data, isError, isSuccess, isPending } = useBlogDetails(id!);

  if (isPending) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>Loading...</div>
    );
  }

  if (isError) {
    return <div style={{ textAlign: "center", padding: "20px" }}>Error...</div>;
  }

  if (isSuccess)
    return (
      <div className="p-3">
        <section className="mx-auto max-w-7xl rounded-lg bg-white px-12 py-10 dark:bg-dark-midnightBlue">
          <img
            src={data.data.image}
            className="h-[500px] w-full object-cover"
            alt={data.data.title}
          />

          <div className="mt-5 flex content-center items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{data.data.title}</h2>
            </div>
            <div className="space-y-3 text-right">
              <p className="text-sm text-gray-500">
                Pub Date:{" "}
                {new Date(data.data.publishedAt).toLocaleDateString("en-US", {
                  dateStyle: "long",
                })}
              </p>
              <p className="text-sm text-gray-500">
                Last Update Date:{" "}
                {new Date(data.data.updatedAt).toLocaleDateString("en-US", {
                  dateStyle: "long",
                })}
              </p>
            </div>
          </div>
          <div>
            <Flex className="mt-5 gap-3">
              <div className="flex items-center gap-1">
                <FaThumbsUp
                  size={24}
                  className={`${data.data.userInteraction.hasLiked && "text-rose-600"} `}
                />
              </div>
              <div className="flex items-center gap-1">
                <FaStar size={24} className="text-yellow-500" />
                <span>{data.data.averageRate}</span>
              </div>
            </Flex>
          </div>
          <div className="mt-5">{data.data.content}</div>

          <div className="mt-5">
            <h2 className="mb-3 text-xl font-bold">Categories : </h2>
            <Flex className="content-center items-center gap-3">
              {data.data.categories.map((item) => {
                return (
                  <Badge color="success" size="medium">
                    {item.category.name}
                  </Badge>
                );
              })}
            </Flex>
          </div>

          <div className="mt-5 space-y-2 opacity-65">
            <p className="text-sm">{data.data.seoTitle}</p>
            <p className="text-sm">{data.data.seoContent}</p>
          </div>
        </section>
      </div>
    );
}

export default BlogDetail;
