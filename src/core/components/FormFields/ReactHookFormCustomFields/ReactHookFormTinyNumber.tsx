import { InputHTMLAttributes, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TinyNumber } from "../Initial/TinyNumber";

export const ReactHookFormTinyNumber = ({
  name = "",
  initNumb,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { initNumb: number }) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const [initialNumb, setInitialNumb] = useState(initNumb);
  return (
    <Controller
      control={control}
      name={name!}
      defaultValue={initialNumb}
      render={({ field }) => {
        const errorMessage = errors[name]?.message;
        const isInvalid = !!errorMessage;
        return (
          <TinyNumber
            {...props}
            {...field}
            InitialNumber={initialNumb}
            setInitialNumber={setInitialNumb}
            setValue={setValue}
            name={name}
            error={errors}
            isInvalid={isInvalid}
          />
        );
      }}
    />
  );
};
