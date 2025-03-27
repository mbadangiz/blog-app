import http from "@services/interceptor";
import { In_GeneralResponse } from "@typesDef/interfaces";

export async function likeBlog(id: string): Promise<In_GeneralResponse> {
  try {
    return await http.post(`/blog/like/${id}`);
  } catch (error) {
    throw error;
  }
}
