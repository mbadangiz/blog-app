import http from "@services/interceptor";
import {
  In_GetCommentsParams,
  In_GetCommentsResponse,
} from "@typesDef/interfaces";

export const getBlogComments = async ({
  id,
  page = 1,
}: In_GetCommentsParams): Promise<In_GetCommentsResponse> => {
  try {
    return await http.get(`/blog/blogsComments/${id}`, {
      params: { page },
    });
  } catch (error) {
    console.error("Error fetching blog comments:", error);
    throw error;
  }
};
