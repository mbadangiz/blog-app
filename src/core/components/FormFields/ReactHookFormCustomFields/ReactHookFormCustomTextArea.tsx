import { TextareaHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import CustomTextArea from "../Initial/TextArea";

export const ReactHookFormCustomTextArea = ({
  name = "",
  defaultValue = "",
  label = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }) => {
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
          <CustomTextArea
            label={label}
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
