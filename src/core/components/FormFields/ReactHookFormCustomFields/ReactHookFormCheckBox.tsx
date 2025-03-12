import { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Checkbox from "../Initial/CheckBox";

export const ReactHookFormCheckbox = ({
  name = "",
  label,
  value,
  isForMultiple = false,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  isForMultiple?: boolean;
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name!}
      render={({ field }) => {
        const errorMessage = errors[name]?.message;
        const isInvalid = !!errorMessage;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (value) {
            const selectedValues = field.value || [];
            if (e.target.checked) {
              field.onChange([...selectedValues, value]);
            } else {
              field.onChange(selectedValues.filter((v: string) => v !== value));
            }
          } else {
            field.onChange(e.target.checked);
          }
        };
        return isForMultiple ? (
          <Checkbox
            {...props}
            {...field}
            label={label}
            name={name}
            error={errors}
            isInvalid={isInvalid}
            value={value}
            checked={
              value ? field.value?.includes(value) : field.value || false
            }
            onChange={handleChange}
          />
        ) : (
          <Checkbox
            {...props}
            {...field}
            label={label}
            name={name}
            error={errors}
            isInvalid={isInvalid}
          />
        );
      }}
    />
  );
};
