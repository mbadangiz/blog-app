import { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import CustomInput from "../Initial/Input";

export const ReactHookFormCustomInput = ({
  name = "",
  defaultValue = "",
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
      defaultValue={defaultValue}
      render={({ field }) => {
        const errorMessage = errors[name]?.message;
        const isInvalid = !!errorMessage;
        return (
          <CustomInput
            {...props}
            {...field}
            name={name}
            error={errors}
            isInvalid={isInvalid}
          />
        );
      }}
    />
  );
};
