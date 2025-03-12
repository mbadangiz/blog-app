import { En_Variant } from "@core/types/enum";

export const ButtonStylesConfigs: Record<En_Variant, string> = {
  solid: "bg-electricIndigo text-white dark:bg-dark-electricLavender",
  outline:
    "border border-electricIndigo text-electricIndigo  dark:border-dark-electricLavender dark:text-dark-electricLavender ",
  ghost: "bg-transparent text-electricIndigo",
};
