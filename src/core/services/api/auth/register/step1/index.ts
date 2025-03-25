import http from "@services/interceptor";
import {
  In_RegisterStep1,
  In_RegisterStep1Response,
} from "@typesDef/interfaces";

async function registerStep1(
  data: In_RegisterStep1,
): Promise<In_RegisterStep1Response> {
  try {
    return await http.post("/auth/local/signup/step1", data);
  } catch (error) {
    throw error;
  }
}

export default registerStep1;
