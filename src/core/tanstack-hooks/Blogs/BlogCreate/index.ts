import { createBlog } from "@services/api/blog/blogCreate";
import { useMutation } from "@tanstack/react-query";
import { In_CreateBlogResponse } from "@typesDef/interfaces";

export const useCreateBlog = () => {
  return useMutation<In_CreateBlogResponse, Error, FormData>({
    mutationFn: createBlog,
  });
};
