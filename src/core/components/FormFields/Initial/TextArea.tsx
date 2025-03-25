import { InputIn_styleConfigs } from "@core/configs/styleConfigs/FormFields";
import Flex from "@coreComps/divisions/Flex";
import generateSingleClassString from "@utils/generateSingleString";
import { ClipboardEventHandler, forwardRef, HTMLProps } from "react";
import { FieldErrors } from "react-hook-form"; // Import FieldErrors from react-hook-form

export interface In_TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  textarea?: boolean;
  onCopy?: ClipboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  isInvalid?: boolean;
  error?: FieldErrors; // Update this to accept FieldErrors
}

const CustomTextArea = forwardRef<HTMLTextAreaElement, In_TextAreaProps>(
  function CustomTextArea(
    { className, id, label, isInvalid, required, error, name, ...props },
    ref,
  ) {
    return (
      <Flex dir="col" className="w-full">
        <label htmlFor={id} className="font-Medium_ir mb-3 text-sm">
          {label} {"  "}
          <span className="text-rose-600">{required && "*"}</span>
        </label>
        <textarea
          id={id}
          className={`h-28 resize-none ${generateSingleClassString(
            InputIn_styleConfigs,
          )} ${className} ${
            props.value &&
            (isInvalid !== undefined ? isInvalid && "border-rose-400" : "")
          }`}
          ref={ref}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} // Ensure props are typed for Textarea
        />
        <div className="">
          {error && error[name!] && <>{error[name!]?.message as string}</>}
        </div>
      </Flex>
    );
  },
);

export default CustomTextArea;
