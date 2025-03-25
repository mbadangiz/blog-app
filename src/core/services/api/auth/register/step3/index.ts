import http from "@services/interceptor";
import {
  In_RegisterStep3,
  In_RegisterStep3Response,
} from "@typesDef/interfaces";

async function registerStep3(
  data: In_RegisterStep3,
): Promise<In_RegisterStep3Response> {
  try {
    return await http.post("/auth/local/signup/step3", data);
  } catch (error) {
    throw error;
  }
}

export default registerStep3;
