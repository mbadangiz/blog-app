import { In_ColProps } from "@core/types/interfaces";

function Col({
  children,
  def,
  sm,
  md,
  lg,
  xl,
  d2xl,
  className,
  ...props
}: In_ColProps) {
  const classes = [
    def === 12 ? "w-full" : `w-${def}/12`,
    sm ? (sm === 12 ? "sm:w-full" : `sm:w-${sm}/12`) : "",
    md ? (md === 12 ? "md:w-full" : `md:w-${md}/12`) : "",
    lg ? (lg === 12 ? "lg:w-full" : `lg:w-${lg}/12`) : "",
    xl ? (xl === 12 ? "xl:w-full" : `xl:w-${xl}/12`) : "",
    d2xl ? (d2xl === 12 ? "2xl:w-full" : `2xl:w-${d2xl}/12`) : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default Col;
