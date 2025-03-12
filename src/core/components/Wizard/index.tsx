import Col from "@coreComps/Divisions/Col";
import Row from "@coreComps/Divisions/Row";
import WizardProvider from "@providers/WizardProvider";
import { In_WizardProps } from "@typesDef/interfaces";
import Navigator from "./Navigator";
import useWizardData from "@hooks/useWizardData";
import Button from "@FormFields/Initial/Button";
import useAppSettings from "@hooks/useAppSettings";

function WizardContainer() {
  const { direction, steps, activeStep, nextStep, prevStep } = useWizardData();
  const { appDir } = useAppSettings();

  const verticalBorder =
    appDir === "rtl"
      ? "border-l-2 border-l-light-steelBlue/20"
      : "border-r-2 border-r-light-steelBlue/20";

  return (
    <Row
      className={`rounded-[20px] bg-white pb-3 dark:bg-dark-midnightBlue ${direction === "vertical" && "pt-3"}`}
    >
      <Col
        def={12}
        xl={direction === "vertical" ? 3 : undefined}
        md={direction === "vertical" ? 3 : undefined}
        className={`${direction === "horizontal" ? "flex flex-wrap content-center items-center justify-center gap-x-4 border-b-2 border-b-light-steelBlue/20" : `${verticalBorder} px-6`} py-5`}
      >
        <Navigator />
      </Col>
      <Col
        def={direction === "horizontal" ? 12 : 3}
        md={direction === "vertical" ? 9 : undefined}
        className="px-3 pb-5 pt-3"
      >
        {steps.find((step) => step.stepNum === activeStep)?.cotent}
      </Col>
      <Col
        def={12}
        className="flex content-center items-center justify-between gap-4 px-3 md:justify-end"
      >
        <Button className="h-9 text-sm" onClick={prevStep}>
          مرحله قبل
        </Button>
        <Button className="h-9 text-sm" onClick={nextStep}>
          مرحله بعد
        </Button>
      </Col>
    </Row>
  );
}

export default function Wizard({
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
      <WizardContainer />
    </WizardProvider>
  );
}
