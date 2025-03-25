import { In_WizardSteps } from "@typesDef/interfaces";
import Register_Step_1 from "./register-step-1";
import Register_Step_2 from "./register-step-2";
import Register_Step_3 from "./register-step-3";
import RegisterWizard from "./RegisterWizardContainer";

const steps: In_WizardSteps[] = [
  { cotent: <Register_Step_1 />, stepNum: 1, title: "" },
  { cotent: <Register_Step_2 />, stepNum: 2, title: "" },
  { cotent: <Register_Step_3 />, stepNum: 3, title: "" },
];
const Register = () => {
  return <RegisterWizard steps={steps} />;
};

export default Register;
