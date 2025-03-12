import {
  In_InputTypeFileStyleConfigs,
  In_StyleConfig,
} from "@core/types/interfaces";

export const InputIn_styleConfigs: In_StyleConfig = {
  default:
    "h-11 rounded-md border-[1.5px] border-solid bg-transparent px-6 font-Reg_ir text-sm placeholder:text-sm",
  light: "border-light-lightPeriwinkle focus:border-electricIndigo",
  dark: "dark:border-white/10 dark:text-white dark:focus:border-dark-electricLavender",
};

export const selectIn_styleConfigs = (themeMode: string, isError: boolean) => {
  const selectThemeColors = (theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: themeMode === "light" ? "#4218ff36" : "#7451ff40", // for option hover bg-color
      primary: themeMode === "light" ? "#4318FF" : "#7551FF", // for selected option bg-color
      neutral20: themeMode === "light" ? "#00000039" : "#fff", // for input border-color
    },
  });

  const customStyles = () => ({
    dropdownIndicator: (base: any, state: any) => ({
      ...base,
      color: state.isFocused && themeMode === "light" ? "#4318FF" : "#7551FF", // Color in focus
      "&:hover": {
        color: themeMode === "light" ? "#4218ff" : "#7451ff", // Hover color
      },
    }),
  });

  const classes = {
    control: (state: any) => {
      return `${state.isFocused && " !border-electricIndigo dark:!border-dark-electricLavender "}
          px-4 !bg-inherit text-sm h-11 dark:!text-white !outline-none !border-light-lightPeriwinkle !outline-0  dark:!outline-0  dark:!border-white/10 ${isError && "!border-rose-400"}`;
    },
    placeholder: () => {
      return `dark:text-white  text-sm  `;
    },
    menu: () => {
      return `dark:!bg-dark-midnightBlue dark:!text-white shadow-md !text-sm`;
    },
    option: () => {
      return ` !cursor-pointer !text-sm`;
    },
    singleValue: () => {
      return ` text-sm  dark:!text-white `;
    },
    multiValue: () => {
      return `!bg-electricIndigo dark:!bg-dark-electricLavender !text-white !rounded`;
    },
    multiValueLabel: () => {
      return `!text-white  !rounded`;
    },
    multiValueRemove: () => {
      return `!bg-electricIndigo dark:!bg-dark-electricLavender  !text-white !rounded`;
    },
  };

  return { classes, selectThemeColors, customStyles };
};

export const inputTypeFileIn_styleConfigs: In_InputTypeFileStyleConfigs = {
  label: {
    default:
      "relative mx-auto flex h-52 w-full max-w-7xl cursor-pointer flex-col gap-2 content-center items-center justify-center space-y-2 rounded-md border-[3.5px] border-dashed border-light-steelBlue bg-light-steelBlue/20 text-light-navyblue/60 mb-3",
    hovered: "hover:bg-light-steelBlue/30 hover:text-light-navyblue",
    dark: "dark:text-white/30 dark:hover:text-white",
  },
  input: {
    default: "absolute left-0 top-0 size-full cursor-pointer opacity-0",
  },
};
