import http from "@services/interceptor";
import {
  In_RegisterStep2,
  In_RegisterStep2Response,
} from "@typesDef/interfaces";

async function registerStep2(
  data: In_RegisterStep2,
): Promise<In_RegisterStep2Response> {
  try {
    return await http.post("/auth/local/signup/step2", data);
  } catch (error) {
    throw error;
  }
}

export default registerStep2;
