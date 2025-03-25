import registerStep3 from "@services/api/auth/register/step3";
import { useMutation } from "@tanstack/react-query";
import {
  In_RegisterStep3,
  In_RegisterStep3Response,
} from "@typesDef/interfaces";

export const useRegisterStep3 = () => {
  return useMutation<In_RegisterStep3Response, Error, In_RegisterStep3>({
    mutationFn: registerStep3,
  });
};
