import { In_CustomInputProps } from "@core/types/interfaces";
import { forwardRef } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

const Checkbox = forwardRef<
  HTMLInputElement,
  In_CustomInputProps & {
    isInvalid?: boolean;
    error: FieldErrors<FieldValues>;
  }
>(function CustomInput(
  { className, id, label, isInvalid, required, ...props },
  ref,
) {
  return (
    <label
      className={`mx-auto flex w-max cursor-pointer select-none content-center items-center gap-2.5 ${props.value && (isInvalid !== undefined ? isInvalid && "text-rose-400" : "")}`}
      htmlFor={id}
    >
      <input
        type="checkbox"
        id={id}
        className={`size-[17px] border-0 accent-electricIndigo outline-none dark:accent-dark-electricLavender`}
        ref={ref}
        required={required}
        {...props}
      />
      {label} <span className="text-electricIndigo">{required && "*"}</span>
    </label>
  );
});

export default Checkbox;
