import { In_RowProps } from "@core/types/interfaces";

function Row({ children, className }: In_RowProps) {
  return (
    <div
      className={`flex w-full flex-wrap content-center items-center ${className}`}
    >
      {children}
    </div>
  );
}
export default Row;
