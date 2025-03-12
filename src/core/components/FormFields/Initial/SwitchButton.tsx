import { In_CustomInputProps } from "@core/types/interfaces";
import { forwardRef } from "react";

const SwitchButton = forwardRef<HTMLInputElement, In_CustomInputProps>(
  function SwitchButton({ className, id, label, checked, ...props }, ref) {
    return (
      <label className="relative inline-flex cursor-pointer select-none items-center">
        <input
          {...props}
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          ref={ref}
        />
        <div
          className={`peer h-6 w-11 rounded-full bg-light-steelBlue transition-all peer-checked:bg-electricIndigo dark:peer-checked:bg-dark-electricLavender`}
        />
        <span
          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform peer-checked:translate-x-5`}
        />
      </label>
    );
  },
);
export default SwitchButton;
