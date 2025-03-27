import { In_Blog } from "@typesDef/interfaces";
import { CiHeart, CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import CoverImage from "./CoverImage";
const BlogCard = ({ blog }: { blog: In_Blog }) => {
  return (
    <Link to={`/blog/${blog.blogId}`}>
      <div className="col-span-12 rounded-lg bg-white p-2 dark:bg-dark-midnightBlue sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4">
        <CoverImage coverImageUrl={blog.image} />

        <div className="bg-secondary-100 flex w-full flex-1 flex-col justify-between rounded-lg p-2">
          <h2 className="text-secondary-700 mb-4 font-bold">{blog.title}</h2>

          <div className="mb-4 flex items-center justify-between">
            <div className="text-secondary-500 flex items-center text-[10px]">
              <CiStar className="h-4 w-4" />
              {blog.averageRate}
            </div>
            <div className="text-secondary-500 flex items-center text-[10px]">
              <CiHeart className="h-4 w-4" />
              {blog.totalLikes}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
