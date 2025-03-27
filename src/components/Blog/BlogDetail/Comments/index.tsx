import { useGetBlogComments } from "@core/tanstack-hooks/Blogs/blogsGetComments";
import SimpleSpinner from "@coreComps/SimpleSpinner";
import Button from "@FormFields/Initial/Button";
import { useState } from "react";

function BlogComments({ id }: { id: string }) {
  const [page, setPage] = useState(1);
  const {
    data: comments,
    isPending,
    isLoading,
    isError,
    isSuccess,
  } = useGetBlogComments({ id, page });

  if (isPending || isLoading) {
    return (
      <div>
        <SimpleSpinner className="size-10" />
        <p>Please Wait...</p>
      </div>
    );
  }

  if (isError) {
    <div>
      <p>A erro Wait...</p>
    </div>;
  }

  if (isSuccess)
    return (
      <section className="my-6 max-w-7xl">
        <div className="mt-5 w-full rounded-lg bg-white p-6 dark:bg-dark-midnightBlue">
          {comments?.data.map((comment) => (
            <div key={comment.commentId} className="mb-4 border-b pb-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={comment.user.avatar}
                    alt={`${comment.user.fullName}'s avatar`}
                    className="mr-3 h-10 w-10 rounded-full"
                  />
                  <span className="font-semibold">{comment.user.fullName}</span>
                </div>
                <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">
                  {new Date(comment.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  at
                  {new Date(comment.createdAt).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {comment.content}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto text-center">
          {comments?.pagination?.total > page * 10 ? (
            <Button
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
              className="mx-auto text-center"
            >
              Show More...
            </Button>
          ) : (
            <p className="mt-6">**No more comments to show**</p>
          )}
        </div>
      </section>
    );
}

export default BlogComments;
