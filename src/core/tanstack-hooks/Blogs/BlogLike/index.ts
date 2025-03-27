import { likeBlog } from "@services/api/blog/blogLike";
import { useMutation } from "@tanstack/react-query";
import { In_GeneralResponse } from "@typesDef/interfaces";

export const useLikeBlog = () => {
  return useMutation<In_GeneralResponse, Error, string>({
    mutationFn: likeBlog,
  });
};
