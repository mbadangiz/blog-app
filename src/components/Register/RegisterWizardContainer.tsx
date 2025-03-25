import useWizardData from "@hooks/useWizardData";
import WizardProvider from "@providers/WizardProvider";
import { In_WizardProps } from "@typesDef/interfaces";
import { Link } from "react-router-dom";
import LoginBG from "../../assets/Images/login-bg.png";
import Button from "@FormFields/Initial/Button";

const RegisterWizardContainer = () => {
  const { steps, activeStep, nextStep, prevStep } = useWizardData();

  return (
    <div className="grid h-screen lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col items-center justify-center">
        <div className="grid max-w-[410px] gap-4">
          <h2 className="text-4xl font-bold">Sign Up</h2>
          <p className="text-[#A3AED0]">
            Enter your email and password to sign up!
          </p>
          <form action="">
            {steps.find((step) => step.stepNum === activeStep)?.cotent}
          </form>
          <div className="mt-7 flex justify-between">
            <Button onClick={prevStep}>Prev Step</Button>
            <Button onClick={nextStep}>Next Step</Button>
          </div>
          <Link to="/login" className="mt-2 text-sm">
            Do you have an account?
            <span className="text-[#4318FF]">Sign In an Account</span>
          </Link>
        </div>
      </div>
      <div className="hidden h-full overflow-hidden rounded-bl-[180px] lg:block">
        <img src={LoginBG} alt="" className="h-full w-full" />
      </div>
    </div>
  );
};

export default function RegisterWizard({
  navigationType,
  steps,
  direction,
}: In_WizardProps) {
  return (
    <WizardProvider
      steps={steps}
      navigationType={navigationType}
      direction={direction}
    >
      <RegisterWizardContainer />
    </WizardProvider>
  );
}
