import { unLikeBlog } from "@services/api/blog/blogUnlike";
import { useMutation } from "@tanstack/react-query";
import { In_GeneralResponse } from "@typesDef/interfaces";

export const useUnLikeBlog = () => {
  return useMutation<In_GeneralResponse, Error, string>({
    mutationFn: unLikeBlog,
  });
};
