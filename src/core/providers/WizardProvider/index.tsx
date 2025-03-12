import { En_Directions, En_NavigationType } from "@typesDef/enum";
import {
  In_WizardDataProviderContext,
  In_WizardProviderProps,
} from "@typesDef/interfaces";
import { createContext, useState } from "react";

export const wizardContext = createContext<
  In_WizardDataProviderContext | undefined
>(undefined);

function WizardProvider({
  navigationType = En_NavigationType.SIMPLEARROW,
  steps,
  direction = En_Directions.HORIZONTAL,
  children,
}: In_WizardProviderProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [passedSteps, setPassedSteps] = useState<number[]>([]);

  function nextStep() {
    setPassedSteps((prev) => {
      if (!prev.includes(activeStep) && activeStep !== steps.length) {
        return [...prev, activeStep];
      }
      return prev;
    });

    setActiveStep((prev) => (prev === steps.length ? steps.length : prev + 1));
  }

  function prevStep() {
    const filterSteps = [...passedSteps];
    filterSteps.pop();
    setActiveStep(activeStep === 1 ? 1 : activeStep - 1);
    setPassedSteps(filterSteps);
  }

  return (
    <wizardContext.Provider
      value={{
        activeStep,
        passedSteps,
        steps,
        navigationType,
        direction,
        nextStep,
        prevStep,
      }}
    >
      {children}
    </wizardContext.Provider>
  );
}

export default WizardProvider;
