import { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import RadioButton from "../Initial/RadioButton";

export const ReactHookFormRadioButton = ({
  name = "",
  defaultValue = "",
  label,
  value,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) => {
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
          <RadioButton
            {...props}
            {...field}
            label={label}
            name={name}
            error={errors}
            value={value}
            checked={field.value === value}
            isInvalid={isInvalid}
          />
        );
      }}
    />
  );
};
