import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginBG from "../../../assets/Images/login-bg.png";
import {
  RegisterContextType,
  RegisterStep1Data,
  RegisterStep2Data,
  RegisterStep3Data,
} from "@core/types/interfaces";

const RegisterContext = createContext<RegisterContextType | undefined>(
  undefined,
);

export function RegisterProvider({ children }: { children: React.ReactNode }) {
  const [step1Data, setStep1Data] = useState<RegisterStep1Data | null>(null);
  const [step2Data, setStep2Data] = useState<RegisterStep2Data | null>(null);
  const [step3Data, setStep3Data] = useState<RegisterStep3Data | null>(null);

  const clearRegistrationData = () => {
    setStep1Data(null);
    setStep2Data(null);
    setStep3Data(null);
  };

  return (
    <RegisterContext.Provider
      value={{
        step1Data,
        step2Data,
        step3Data,
        setStep1Data,
        setStep2Data,
        setStep3Data,
        clearRegistrationData,
      }}
    >
      <div className="grid h-screen lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col items-center justify-center">
          <div className="grid max-w-[410px] gap-4">
            <h2 className="text-4xl font-bold">Sign Up</h2>
            <p className="text-[#A3AED0]">
              Enter your email and password to sign up!
            </p>
            <div>{children}</div>
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
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return context;
}
