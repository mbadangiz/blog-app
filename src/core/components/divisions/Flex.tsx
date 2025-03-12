import { In_FlexProps } from "@core/types/interfaces";

function Flex({
  dir = "row",
  gap,
  children,
  justifyContent = "start",
  alignItems = "normal",
  alignContent = "stretch",
  wrap = "nowrap",
  className,
  ...props
}: In_FlexProps) {
  const gapStyle = gap
    ? typeof gap === "number"
      ? { gap: gap }
      : { rowGap: gap.y, columnGap: gap.x }
    : {};

  return (
    <div
      className={`flex ${dir === "col" ? "flex-col" : "flex-row"} justify-${justifyContent} items-${alignItems} content-${alignContent} flex-${wrap} ${className}`}
      style={{ ...gapStyle }}
      {...props}
    >
      {children}
    </div>
  );
}

export default Flex;

export function FlexAllCentered({
  dir = "row",
  wrap = "nowrap",
  gap,
  children = <></>,
  className,
  style,
  ...props
}: In_FlexProps) {
  const gapStyle = gap
    ? typeof gap === "number"
      ? { gap: gap }
      : { rowGap: gap.y, columnGap: gap.x }
    : {};

  return (
    <div
      className={`flex ${dir === "col" ? "flex-col" : "flex-row"} content-center items-center justify-center ${className}`}
      style={{ ...gapStyle, ...style!, flexWrap: wrap }}
      {...props}
    >
      {children}
    </div>
  );
}

export function FlexChildrenCentered({
  dir = "row",
  gap,
  children,
  justifyContent = "start",
  className,
  ...props
}: In_FlexProps) {
  const gapStyle = gap
    ? typeof gap === "number"
      ? { gap: gap }
      : { rowGap: gap.y, columnGap: gap.x }
    : {};

  return (
    <div
      className={`flex ${dir === "col" ? "flex-col" : "flex-row"} content-center items-center justify-${justifyContent} ${className}`}
      style={{ ...gapStyle }}
      {...props}
    >
      {children}
    </div>
  );
}
