import http from "@services/interceptor";
import { In_CommentData, In_CommentResponse } from "@typesDef/interfaces";

export async function createBlogComment(
  data: In_CommentData,
): Promise<In_CommentResponse> {
  try {
    return await http.post(`/blog/comment`, data);
  } catch (error) {
    throw error;
  }
}
