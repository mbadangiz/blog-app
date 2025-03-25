import http from "@services/interceptor";
import { In_BlogListParams, In_BlogListResponse } from "@typesDef/interfaces";

export async function getBlogList(
  params: In_BlogListParams,
): Promise<In_BlogListResponse> {
  try {
    return await http.get("/blog/listSreachFilter", {
      params: {
        search: params.search || "",
        page: params.page || 1,
        limit: params.limit || 10,
        categoryIds: params.categoryIds || [],
      },
    });
  } catch (error) {
    throw error;
  }
}
