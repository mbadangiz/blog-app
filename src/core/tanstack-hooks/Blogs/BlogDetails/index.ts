import { getBlogDetail } from "@services/api/blog/blogDetail";
import { useQuery } from "@tanstack/react-query";
import { In_BlogResponseDetailResonse } from "@typesDef/interfaces";

export function useBlogDetails(id: string) {
  return useQuery<In_BlogResponseDetailResonse, Error>({
    queryKey: ["blogDetails", id],
    queryFn: async () => await getBlogDetail(id),
  });
}
