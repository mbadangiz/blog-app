import http from "@services/interceptor";
import { In_ProfileUpdateResponse } from "@typesDef/interfaces";

export async function updateProfile(
  data: FormData,
): Promise<In_ProfileUpdateResponse> {
  try {
    return await http.put("/profile/update", data);
  } catch (error) {
    throw error;
  }
}
