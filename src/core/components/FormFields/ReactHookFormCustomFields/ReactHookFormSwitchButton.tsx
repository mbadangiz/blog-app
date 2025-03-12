import { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import SwitchButton from "../Initial/SwitchButton";

export const ReactHookFormSwitchButton = ({
  name = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name!}
      render={({ field }) => {
        return (
          <SwitchButton {...field} {...props} name={name} error={errors} />
        );
      }}
    />
  );
};
