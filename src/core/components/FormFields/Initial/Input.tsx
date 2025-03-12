import Flex from "@coreComps/Divisions/Flex";
import { InputIn_styleConfigs } from "@core/configs/styleConfigs/FormFields";
import { In_CustomInputProps } from "@core/types/interfaces";
import generateSingleClassString from "@utils/generateSingleString";
import { forwardRef, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const CustomInput = forwardRef<HTMLInputElement, In_CustomInputProps>(
  function CustomInput(
    { className, id, label, isInvalid, required, error, name, ...props },
    ref,
  ) {
    return (
      <Flex dir="col" className="w-max">
        <label htmlFor={id} className="mb-3 font-Medium_ir text-sm">
          {label} {"  "}
          <span className="text-rose-600">{required && "*"}</span>
        </label>
        <input
          id={id}
          className={` ${generateSingleClassString(InputIn_styleConfigs)} ${className} ${props.value && (isInvalid !== undefined ? isInvalid && "border-rose-400" : "")} `}
          ref={ref}
          {...props}
        />
        <div className="">
          {error && error[name!] && <>{error[name!]?.message as string}</>}
        </div>
      </Flex>
    );
  },
);

export default CustomInput;

export const Password = forwardRef<HTMLInputElement, In_CustomInputProps>(
  function CustomInput({ className, id, label, required, ...props }, ref) {
    const [defaultType, setDefaultType] = useState<string>("password");
    return (
      <Flex dir="col" className="w-max">
        <label htmlFor={id} className="mb-3 font-Medium_ir text-sm">
          {label}
          <span className="text-electricIndigo dark:text-dark-electricLavender">
            {required && "*"}
          </span>
        </label>
        <div className="relative w-max">
          <input
            type={defaultType}
            id={id}
            className={`${generateSingleClassString(InputIn_styleConfigs)} ${className} `}
            ref={ref}
            required={required}
            {...props}
          />
          <span
            className="absolute bottom-1/2 left-2.5 translate-y-1/2 cursor-pointer text-light-steelBlue"
            onClick={() =>
              setDefaultType((prev) =>
                prev === "password" ? "text" : "password",
              )
            }
          >
            {defaultType === "password" ? (
              <IoEyeOutline size={21} />
            ) : (
              <IoEyeOffOutline size={21} />
            )}
          </span>
        </div>
      </Flex>
    );
  },
);
