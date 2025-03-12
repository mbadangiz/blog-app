import useWizardData from "@hooks/useWizardData";
import SimpleArrowNavigator from "./SimpleArrowNavigator";

export default function Navigator() {
  const { navigationType } = useWizardData();

  switch (navigationType) {
    case "simpleArrow":
      return <SimpleArrowNavigator />;

    default:
      return <></>;
  }
}
