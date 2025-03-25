import { useMutation } from "@tanstack/react-query";
import registerStep1 from "@services/api/auth/register/step1";
import {
  In_RegisterStep1,
  In_RegisterStep1Response,
} from "@typesDef/interfaces";

export const useRegisterStep1 = () => {
  return useMutation<In_RegisterStep1Response, Error, In_RegisterStep1>({
    mutationFn: registerStep1,
  });
};
