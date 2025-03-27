import http from "@services/interceptor";
import { In_GeneralResponse, In_Rate } from "@typesDef/interfaces";

export async function addUpdateRate(
  data: In_Rate & { id: string },
): Promise<In_GeneralResponse> {
  try {
    return await http.post(`/blog/add-update-rate/${data.id}`, {
      rate: data.rate,
    });
  } catch (error) {
    throw error;
  }
}
