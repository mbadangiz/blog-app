import { blogRemoveRate } from "@services/api/blog/blogRemoveRate";
import { useMutation } from "@tanstack/react-query";
import { In_GeneralResponse } from "@typesDef/interfaces";

export const useBlogRemoveRate = () => {
  return useMutation<In_GeneralResponse, Error, string>({
    mutationFn: blogRemoveRate,
  });
};
