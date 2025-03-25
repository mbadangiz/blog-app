import { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Password } from "../Initial/Input";

export const ReactHookFormPassword = ({
  name = "",
  label = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label?: string }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name!}
      defaultValue={""}
      render={({ field }) => {
        return (
          <Password
            {...props}
            {...field}
            name={name}
            error={errors}
            label={label}
          />
        );
      }}
    />
  );
};
