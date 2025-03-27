import http from "@services/interceptor";
import { In_GeneralResponse } from "@typesDef/interfaces";

export async function blogRemoveRate(id: string): Promise<In_GeneralResponse> {
  try {
    return await http.delete(`/blog/delete-rate/${id}`);
  } catch (error) {
    throw error;
  }
}
