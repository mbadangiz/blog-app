import { In_StyleConfig } from "@core/types/interfaces";

interface I_profileMenuStyleConfig {
  ul: In_StyleConfig;
  nav: In_StyleConfig;
}

export const profileMenuStyleConfig: I_profileMenuStyleConfig = {
  nav: {
    default:
      "fixed bottom-0 left-0 z-leve6 col-span-1 h-16 w-full  lg:static lg:h-full xl:row-span-1",
    light: "bg-white",
    dark: "dark:bg-dark-midnightBlue",
  },
  ul: {
    default:
      "flex h-full max-h-[520px] content-center items-center justify-evenly overflow-y-auto lg:mt-8 lg:block lg:h-auto lg:space-y-3",
  },
};

interface I_profileMenuItemsStyleConfig {
  linkSC: In_StyleConfig;
  liSC: In_StyleConfig;
}

export const profileMenuItemsStyleConfig: I_profileMenuItemsStyleConfig = {
  linkSC: {
    default: "relative block lg:w-full",
    active:
      "lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:block lg:before:h-full lg:before:w-[5px] lg:before:rounded-full lg:before:bg-electricIndigo dark:lg:before:bg-dark-electricLavender",
  },
  liSC: {
    default:
      "mx-auto flex content-center items-center justify-between gap-3 lg:h-10 lg:w-4/5",
    active: "text-light-navyblue  dark:text-white",
    deactive: "text-light-steelBlue",
  },
};

interface I_profileMainContentNavStyleConfig {
  profileMainContentNav: In_StyleConfig;
  profileMenuOptions: In_StyleConfig;
}

export const profileMainContentNavStyleConfig: I_profileMainContentNavStyleConfig =
  {
    profileMainContentNav: {
      default:
        "profileMainContentNav fixed left-1/2 top-5 z-leve3 flex h-auto w-[95%] -translate-x-1/2 flex-row-reverse flex-wrap content-center items-center justify-between gap-5 rounded-full bg-white px-2 py-1 text-light-steelBlue shadow-lg shadow-[rgba(0,0,0,0.05)] md:static md:h-14 md:w-auto md:translate-x-0 md:justify-start md:px-3.5 md:py-0",
      dark: "dark:bg-dark-midnightBlue dark:text-white",
    },
    profileMenuOptions: {
      default:
        "absolute left-1/2 top-8 flex w-20 -translate-x-1/2 content-center items-center justify-center gap-3 border-[1px] border-solid bg-white py-3 shadow-md transition-all",
      deactive: "hidden rounded-xl",
      active: "block rounded-xl",
    },
  };

// MenuOptions
