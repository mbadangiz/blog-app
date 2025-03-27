import { createBlogComment } from "@services/api/blog/createBlogComment";
import { useMutation } from "@tanstack/react-query";
import { In_CommentData, In_CommentResponse } from "@typesDef/interfaces";

export const useCreateCommentBlog = () => {
  return useMutation<In_CommentResponse, Error, In_CommentData>({
    mutationFn: createBlogComment,
  });
};
