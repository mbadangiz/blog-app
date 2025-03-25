import { getBlogList } from "@services/api/blog/getBlogList";
import { useQuery } from "@tanstack/react-query";
import { In_BlogListResponse } from "@typesDef/interfaces";
import { In_BlogListParams } from "@typesDef/interfaces";

export function useGetBlogList(params: In_BlogListParams) {
  return useQuery<In_BlogListResponse>({
    queryKey: ["blogs", params],
    queryFn: async () => await getBlogList(params),
  });
}
