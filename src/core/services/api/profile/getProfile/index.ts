import http from "@services/interceptor";
import { In_ProfileResponse } from "@typesDef/interfaces";

export async function getProfile(): Promise<In_ProfileResponse> {
  try {
    return await http.get("/profile");
  } catch (error) {
    throw error;
  }
}
