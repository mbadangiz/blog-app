import http from "@services/interceptor";
import { In_CreateBlogResponse } from "@typesDef/interfaces";

export async function createBlog(
  data: FormData,
): Promise<In_CreateBlogResponse> {
  try {
    return await http.post(`/blog/create`, data);
  } catch (error) {
    throw error;
  }
}
