import { In_ReactSelectProps } from "@core/types/interfaces";
import { Controller, useFormContext } from "react-hook-form";
import Select from "../Initial/Select";

export const ReactHookFormSelect = ({
  name = "",
  defaultValue = "",
  ...props
}: In_ReactSelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name!}
      defaultValue={defaultValue}
      render={({ field }) => {
        return <Select {...field} {...props} error={errors} />;
      }}
    />
  );
};
