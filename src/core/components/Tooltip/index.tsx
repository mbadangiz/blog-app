import { En_Position, En_Size } from "@typesDef/enum";
import { In_TooltipBoxProps, In_TooltipProps } from "@typesDef/interfaces";

function Tooltip({
  children,
  label,
  position = En_Position.TOP,
  size = En_Size.REGULAR,
}: In_TooltipProps) {
  console.log(typeof label);

  return (
    <div className="relative w-max">
      <div className="peer">{children}</div>
      <TooltipBox label={label} position={position} size={size} />
    </div>
  );
}

function TooltipBox({ label, position, size }: In_TooltipBoxProps) {
  const PositionClasses: Record<En_Position, string> = {
    [En_Position.TOP]: "-top-14 left-1/2 -translate-x-1/2",
    [En_Position.BOTTOM]: "-bottom-14 left-1/2 -translate-x-1/2",
    [En_Position.LEFT]: "top-1/2  right-12 -translate-y-1/2",
    [En_Position.RIGHT]: "top-1/2 left-12 -translate-y-1/2",
  };
  const fontSizeClasses: Record<En_Size, string> = {
    [En_Size.EXTRA_SMALL]: "text-xs",
    [En_Size.SMALL]: "text-sm",
    [En_Size.REGULAR]: "text-base",
    [En_Size.MEDIUM]: "text-lg",
    [En_Size.LARGE]: "text-xl",
    [En_Size.EXTRA_LARGE]: "text-2xl",
  };
  if (typeof label === "string")
    return (
      <div
        className={`absolute hidden w-max rounded-lg bg-gray-600 px-4 py-2 text-white peer-hover:block ${PositionClasses[position]} ${fontSizeClasses[size]}`}
      >
        {label}
      </div>
    );
  if (typeof label === "function")
    return (
      <div
        className={`absolute hidden w-max peer-hover:block ${PositionClasses[position]} `}
      >
        {label()}
      </div>
    );
  if (typeof label === "object")
    return (
      <div
        className={`absolute hidden w-max rounded-lg peer-hover:block ${PositionClasses[position]} `}
      >
        {label}
      </div>
    );
  return <></>;
}

export default Tooltip;
