import { En_BadgeComponents, En_ColorModes, En_Size } from "@typesDef/enum";
import { In_BadgeProps } from "@typesDef/interfaces";
import classNames from "classnames";

function Badge({
  children,
  component = En_BadgeComponents.DIV,
  className,
  color = En_ColorModes.PRIMARY,
  size = En_Size.SMALL,
  ...props
}: In_BadgeProps) {
  const classes = `select-none rounded-full px-3 py-0.5 text-white`;

  const colorModes = classNames({
    "bg-error": color === En_ColorModes.ERROR,
    "bg-light-steelBlue": color === En_ColorModes.DISABLED,
    "bg-electricIndigo dark:bg-dark-electricLavender":
      color === En_ColorModes.PRIMARY,
    "bg-success": color === En_ColorModes.SUCCESS,
    "bg-warning": color === En_ColorModes.WARNING,
  });

  const sizes = classNames({
    "text-2xl": size === En_Size.EXTRA_LARGE,
    "text-xs": size === En_Size.EXTRA_SMALL,
    "text-xl": size === En_Size.LARGE,
    "text-lg": size === En_Size.MEDIUM,
    "text-sm": size === En_Size.SMALL,
    "text-base": size === En_Size.REGULAR,
  });

  if (component === "p")
    return (
      <p
        className={`${colorModes} ${sizes} ${classes} ${className} `}
        {...props}
      >
        {children}
      </p>
    );

  if (component === "div")
    return (
      <div
        className={`${colorModes} ${sizes} ${classes} ${className} `}
        {...props}
      >
        {children}
      </div>
    );

  return (
    <span
      className={`${colorModes} ${sizes} ${classes} ${className} `}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
