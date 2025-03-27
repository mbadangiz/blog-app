import { getBlogComments } from "@services/api/blog/blogsGetComments";
import { useQuery } from "@tanstack/react-query";
import {
  In_GetCommentsParams,
  In_GetCommentsResponse,
} from "@typesDef/interfaces";

export const useGetBlogComments = (params: In_GetCommentsParams) => {
  return useQuery<In_GetCommentsResponse, Error>({
    queryKey: ["blogComments", params.id],
    queryFn: () => getBlogComments(params),
  });
};
