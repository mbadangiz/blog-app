import { In_CustomInputProps } from "@core/types/interfaces";
import { forwardRef } from "react";

const RadioButton = forwardRef<HTMLInputElement, In_CustomInputProps>(
  function CustomInput({ className, id, label, required, ...props }, ref) {
    return (
      <label
        className="mx-auto flex w-max cursor-pointer select-none content-center items-center gap-2.5"
        htmlFor={id}
      >
        <input
          type="radio"
          id={id}
          className={`size-[17px] border-0 accent-electricIndigo outline-none dark:accent-dark-electricLavender`}
          ref={ref}
          required={required}
          {...props}
        />
        {label} <span className="text-electricIndigo">{required && "*"}</span>
      </label>
    );
  },
);

export default RadioButton;
