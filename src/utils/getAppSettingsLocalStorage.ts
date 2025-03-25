import { T_AppDirection, T_themeMode } from "@core/types/types";

export function getThemeLocalStorage(): T_themeMode {
  const theme = localStorage.getItem("themeMode");
  if (theme === "light" || theme === "dark") {
    return theme;
  }
  return "light";
}

export function getDirLocalStorage(): T_AppDirection {
  const theme = localStorage.getItem("appDir");
  if (theme === "rtl" || theme === "ltr") {
    return theme;
  }
  return "ltr";
}
