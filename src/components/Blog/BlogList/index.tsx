import { CustomInputRHF } from "@core/components/FormFields/ReactHookFormCustomFields";
import { useGetBlogList } from "@core/tanstack-hooks/Blogs";
import Button from "@FormFields/Initial/Button";
import { In_Blog } from "@typesDef/interfaces";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BlogCard from "./BlogsCard";

interface BlogListFilters {
  search: string;
  categories: number[];
}

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const methods = useForm<BlogListFilters>({
    defaultValues: {
      search: "",
      categories: [],
    },
  });

  const { data, isLoading, isError, isSuccess } = useGetBlogList({
    search: methods.watch("search"),
    page: currentPage,
    limit: pageSize,
  });

  const handleSubmit = (data: BlogListFilters) => {
    setCurrentPage(1);
  };

  const handleClear = () => {
    methods.reset();
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (
      page >= 1 &&
      (!data?.pagination.totalPages || page <= data.pagination.totalPages)
    ) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-3">
      <div className="flex items-center justify-between py-3">
        <h3 className="p-2 text-2xl">Blog List</h3>

        <div>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(handleSubmit)}
              className="flex w-full items-center justify-between gap-3"
            >
              <CustomInputRHF
                name="search"
                placeholder="Search blogs..."
                className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />

              <Button type="submit" className="flex items-center gap-2">
                Search
              </Button>

              <Button
                type="button"
                onClick={handleClear}
                variant="outline"
                className="flex items-center gap-2"
              >
                Clear
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>

      {isLoading && <div>Loading...</div>}

      {isError && <div>Error</div>}

      {isSuccess && (
        <>
          <div className="grid grid-cols-12 gap-5">
            {data.data.map((blog: In_Blog) => (
              <div key={blog.blogId} className="col-span-4">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-5">
            <Button
              variant="solid"
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex w-11 content-center items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
              disabled={currentPage <= 1}
            >
              {"<"}
            </Button>
            <p>{currentPage}</p>
            <Button
              variant="solid"
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex w-11 content-center items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
              disabled={
                data?.pagination && currentPage >= data.pagination.totalPages
              }
            >
              {">"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default BlogList;
