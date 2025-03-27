import { useBlogDetails } from "@core/tanstack-hooks/Blogs/BlogDetails";
import Badge from "@coreComps/Badge";
import Flex from "@coreComps/divisions/Flex";
import { useParams } from "react-router-dom";
import { FaThumbsUp, FaStar } from "react-icons/fa";
import { Rate } from "rsuite";
import { useLikeBlog } from "@core/tanstack-hooks/Blogs/BlogLike";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useUnLikeBlog } from "@core/tanstack-hooks/Blogs/BlogUnlike";
import SimpleSpinner from "@coreComps/SimpleSpinner";
import { useAddUpdateRate } from "@core/tanstack-hooks/Blogs/BlogaddUpdateRate";
import { useBlogRemoveRate } from "@core/tanstack-hooks/Blogs/BlogRemoveRate";
import BlogComments from "./Comments";
import CreateNewComment from "./Comments/CreateNewComment";

function BlogDetail() {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { data, isError, isSuccess, isPending } = useBlogDetails(id!);

  const { mutate: likeBlog, isPending: likePending } = useLikeBlog();
  const { mutate: unLikeBlog, isPending: unLikePending } = useUnLikeBlog();
  const { mutate: addUpdateRate, isPending: addUpdateRatePending } =
    useAddUpdateRate();

  const { mutate: removeRate, isPending: removeRatePending } =
    useBlogRemoveRate();
  const handleLike = () => {
    likeBlog(id!, {
      onSuccess: (success) => {
        if (success.success) {
          queryClient.invalidateQueries({ queryKey: ["blogDetails", id!] });
          toast.success(success.message);
        }
      },
      onError: (error: any) => {
        if (error.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred while adding like");
        }
      },
    });
  };

  const handleUnLike = () => {
    unLikeBlog(id!, {
      onSuccess: (success) => {
        if (success.success) {
          queryClient.invalidateQueries({ queryKey: ["blogDetails", id!] });
          toast.success(success.message);
        }
      },
      onError: (error: any) => {
        if (error.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred while adding like");
        }
      },
    });
  };

  const handleAddOrUpdateRate = (rate: number) => {
    addUpdateRate(
      { id: id!, rate },
      {
        onSuccess: (success) => {
          if (success.success) {
            queryClient.invalidateQueries({ queryKey: ["blogDetails", id!] });
            toast.success(success.message);
          }
        },
        onError: (error: any) => {
          if (error.response?.data?.message) {
            toast.error(error.response.data.message);
          } else {
            toast.error("An error occurred while updating the rate");
          }
        },
      },
    );
  };

  const handleRemoveRate = () => {
    removeRate(id!, {
      onSuccess: (success) => {
        if (success.success) {
          queryClient.invalidateQueries({ queryKey: ["blogDetails", id!] });
          toast.success(success.message);
        }
      },
      onError: (error: any) => {
        if (error.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred while removing the rate");
        }
      },
    });
  };

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
              <div className="flex cursor-pointer items-center gap-1">
                {likePending || unLikePending ? (
                  <SimpleSpinner className="size-6" />
                ) : (
                  <>
                    <FaThumbsUp
                      size={24}
                      className={`${data.data.userInteraction.hasLiked && "text-rose-600"} `}
                      onClick={() => {
                        if (!data.data.userInteraction.hasLiked) {
                          handleLike();
                        } else {
                          handleUnLike();
                        }
                      }}
                    />
                    <span>{data.data.totalLikes}</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-3">
                <FaStar size={24} className="text-yellow-500" />
                <span>{data.data.averageRate}</span>

                <div className="mx-5">
                  {addUpdateRatePending || removeRatePending ? (
                    <SimpleSpinner className="size-6" />
                  ) : (
                    <>
                      <Rate
                        color="yellow"
                        max={6}
                        size="sm"
                        value={data.data.userInteraction.userRate || 0}
                        onChange={(e) => {
                          handleAddOrUpdateRate(e);
                        }}
                      />
                      {data.data.userInteraction.userRate && (
                        <span
                          className="cursor-pointer hover:text-rose-500 hover:underline"
                          onClick={handleRemoveRate}
                        >
                          Remove Rate
                        </span>
                      )}
                    </>
                  )}
                </div>
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

        <CreateNewComment />

        {data.data.Comments && <BlogComments id={id!} />}
      </div>
    );
}

export default BlogDetail;
