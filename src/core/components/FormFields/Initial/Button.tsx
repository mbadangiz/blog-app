import { ButtonStylesConfigs } from "@core/configs/styleConfigs/Buttons";
import { En_ButtonTags, En_Variant } from "@core/types/enum";
import { In_ButtonProps } from "@core/types/interfaces";
import { Link, LinkProps } from "react-router-dom";

function Button({
  children,
  className,
  variant = En_Variant.SOLID,
  tags = En_ButtonTags.BUTTON,
  to = "",
  ...props
}: In_ButtonProps & Omit<LinkProps, "to">) {
  const combinedClassName = `h-11 rounded-2xl px-6 ${ButtonStylesConfigs[variant as En_Variant]}`;

  return tags === "button" ? (
    <button {...props} className={`${combinedClassName} ${className}`}>
      {children}
    </button>
  ) : (
    <Link {...props} className={`${combinedClassName} ${className}`} to={to}>
      {children}
    </Link>
  );
}

export default Button;
