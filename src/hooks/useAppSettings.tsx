import { AppsSettingContext } from "@providers/AppsSettingProvider";
import { In_AppSettingsContextSchema } from "@typesDef/interfaces";
import { useContext } from "react";

function useAppSettings(): In_AppSettingsContextSchema {
  const context = useContext(AppsSettingContext);

  if (!context) {
    throw new Error("must be used within a  AppsSettingProvider");
  }

  return context;
}

export default useAppSettings;
