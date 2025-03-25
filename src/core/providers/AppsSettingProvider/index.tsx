import {
  In_AppSettingsContextSchema,
  In_AppsSettingProviderProps,
} from "@core/types/interfaces";
import { En_AppDirection, En_themeMode } from "@typesDef/enum";
import { T_AppDirection, T_themeMode } from "@typesDef/types";
import { createContext, useEffect, useState } from "react";

export const AppsSettingContext =
  createContext<In_AppSettingsContextSchema | null>(null);

function AppsSettingProvider({
  children,
  theme = En_themeMode.LIGHT,
  dir = En_AppDirection.LTR,
}: In_AppsSettingProviderProps) {
  const [themeSchema, setThemeSchema] = useState<T_themeMode>(theme);
  const [appDir, setAppDir] = useState<T_AppDirection>(dir);

  function changeAppDir(dir: T_AppDirection) {
    setAppDir(dir);
    localStorage.setItem("appDir", dir);
    document.documentElement.dir = dir;
  }

  function toggleAppDir() {
    setAppDir((prev) => (prev === "ltr" ? "rtl" : "ltr"));
    localStorage.setItem("appDir", appDir === "ltr" ? "rtl" : "ltr");
    document.documentElement.dir = appDir === "ltr" ? "rtl" : "ltr";
  }

  function changeThemeSchema(theme: T_themeMode) {
    setThemeSchema(theme);
    localStorage.setItem("themeMode", theme);
    document.documentElement.className = theme;
  }

  function toggleTheme() {
    setThemeSchema((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem(
      "themeMode",
      themeSchema === "light" ? "dark" : "light",
    );
    document.documentElement.className =
      themeSchema === "light" ? "dark" : "light";
  }

  useEffect(() => {
    document.documentElement.className = themeSchema;
    document.documentElement.dir = appDir;
  }, []);

  return (
    <AppsSettingContext.Provider
      value={{
        themeSchema,
        appDir,
        changeAppDir,
        toggleAppDir,
        changeThemeSchema,
        toggleTheme,
      }}
    >
      {children}
    </AppsSettingContext.Provider>
  );
}

export default AppsSettingProvider;
