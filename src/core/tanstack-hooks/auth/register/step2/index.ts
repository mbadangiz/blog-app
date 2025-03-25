import registerStep2 from "@services/api/auth/register/step2";
import { useMutation } from "@tanstack/react-query";
import {
  In_RegisterStep2,
  In_RegisterStep2Response,
} from "@typesDef/interfaces";

export const useRegisterStep2 = () => {
  return useMutation<In_RegisterStep2Response, Error, In_RegisterStep2>({
    mutationFn: registerStep2,
  });
};
