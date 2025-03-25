import http from "@services/interceptor";
import { In_Login, In_LoginResponse } from "@typesDef/interfaces";

async function login(data: In_Login): Promise<In_LoginResponse> {
  try {
    return await http.post("/auth/local/login", data);
  } catch (error) {
    throw error;
  }
}

export default login;
