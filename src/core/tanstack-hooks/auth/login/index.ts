import login from "@services/api/auth/login";
import { useMutation } from "@tanstack/react-query";
import { In_Login, In_LoginResponse } from "@typesDef/interfaces";

export const useLogin = () => {
  return useMutation<In_LoginResponse, Error, In_Login>({
    mutationFn: login,
  });
};
