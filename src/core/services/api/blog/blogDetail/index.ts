import http from "@services/interceptor";
import { In_BlogResponseDetailResonse } from "@typesDef/interfaces";

export async function getBlogDetail(
  id: string,
): Promise<In_BlogResponseDetailResonse> {
  try {
    return await http.get(`/blog/detail/${id}`);
  } catch (error) {
    throw error;
  }
}
