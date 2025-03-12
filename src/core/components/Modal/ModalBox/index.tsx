import { En_Size } from "@typesDef/enum";
import { In_ModalBoxProps } from "@typesDef/interfaces";
import classNames from "classnames";
import { IoClose } from "react-icons/io5";

function ModalBox({
  onClose,
  children,
  className,
  bgColor,
  height,
  shadow,
  width,
  rounded = En_Size.SMALL,
}: In_ModalBoxProps) {
  const radius = classNames({
    "rounded-none": true,
    "!rounded-xl": rounded === En_Size.EXTRA_LARGE,
    "!rounded-sm": rounded === En_Size.EXTRA_SMALL,
    "!rounded-lg": rounded === En_Size.LARGE,
    "!rounded-md": rounded === En_Size.MEDIUM,
    "!rounded-[4px]": rounded === En_Size.REGULAR,
    "!rounded-[1px]": rounded === En_Size.SMALL,
  });

  return (
    <div
      className={`bg-white p-2 ${radius} ${shadow && "shadow-md"} ${className} `}
      style={{
        width: width ? width : "300px",
        height: height ? height : "300px",
        backgroundColor: bgColor,
      }}
    >
      {onClose && (
        <div className="mb-1">
          <IoClose className="cursor-pointer text-lg" onClick={onClose} />
        </div>
      )}
      {children}
    </div>
  );
}

export default ModalBox;
