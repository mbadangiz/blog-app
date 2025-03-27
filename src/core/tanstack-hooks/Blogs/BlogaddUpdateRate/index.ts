import { addUpdateRate } from "@services/api/blog/addUpdateRate";
import { useMutation } from "@tanstack/react-query";
import { In_GeneralResponse, In_Rate } from "@typesDef/interfaces";

export const useAddUpdateRate = () => {
  return useMutation<In_GeneralResponse, Error, In_Rate & { id: string }>({
    mutationFn: addUpdateRate,
  });
};
