import { useCreateCommentBlog } from "@core/tanstack-hooks/Blogs/BlogCreateComments";
import Button from "@FormFields/Initial/Button";
import { ReactHookFormCustomTextArea } from "@FormFields/ReactHookFormCustomFields/ReactHookFormCustomTextArea";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function CreateNewComment() {
  const queryClient = useQueryClient();

  const { id } = useParams();

  const { mutate: createComments, isPending } = useCreateCommentBlog();
  const methode = useForm();

  const onSubmit = (data: any) => {
    createComments(
      { blogId: id!, content: data.content },
      {
        onSuccess: (success) => {
          if (success.success) {
            queryClient.invalidateQueries({
              queryKey: ["blogComments", id!],
            });
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
      },
    );
  };

  return (
    <div className="mt-5 w-full rounded-lg bg-white p-6 dark:bg-dark-midnightBlue">
      <h1 className="text-xl font-bold">New Comments</h1>
      <div className="mt-5">
        <form onSubmit={methode.handleSubmit(onSubmit)}>
          <FormProvider {...methode}>
            <ReactHookFormCustomTextArea
              label="Content"
              required
              name="content"
            />
            <Button
              className="mt-3 rounded-md disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isPending}
            >
              Submit Comment
            </Button>
          </FormProvider>
        </form>
      </div>
    </div>
  );
}

export default CreateNewComment;
