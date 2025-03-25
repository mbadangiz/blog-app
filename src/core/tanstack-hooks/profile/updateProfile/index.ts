import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "@services/api/profile/updateProfile";
import { In_ProfileUpdateResponse } from "@typesDef/interfaces";

export const useUpdateProfile = () => {
  return useMutation<In_ProfileUpdateResponse, Error, FormData>({
    mutationFn: async (data) => await updateProfile(data),
  });
};
