import { useQuery } from "@tanstack/react-query";
import { verifyToken } from "@services/api/auth/verifyToken";

export const useVerifyToken = () => {
  return useQuery({
    queryKey: ["verify-token"],
    queryFn: verifyToken,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
