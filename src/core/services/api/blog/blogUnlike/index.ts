import http from "@services/interceptor";
import { In_GeneralResponse } from "@typesDef/interfaces";

export async function unLikeBlog(id: string): Promise<In_GeneralResponse> {
  try {
    return await http.delete(`/blog/unlike/${id}`);
  } catch (error) {
    throw error;
  }
}
