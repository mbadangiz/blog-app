import { wizardContext } from "@providers/WizardProvider";
import { In_WizardDataProviderContext } from "@typesDef/interfaces";
import { useContext } from "react";

function useWizardData(): In_WizardDataProviderContext {
  const context = useContext(wizardContext);

  if (!context) {
    throw new Error("must be used within a  AppsSettingProvider");
  }

  return context;
}

export default useWizardData;
