import http from "@services/interceptor";

export async function verifyToken(): Promise<boolean> {
  try {
    return await http.get("/auth/verify-token");
  } catch (error) {
    throw error;
  }
}
