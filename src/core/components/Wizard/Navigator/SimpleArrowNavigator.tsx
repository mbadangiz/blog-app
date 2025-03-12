import Flex, { FlexAllCentered } from "@coreComps/Divisions/Flex";
import useAppSettings from "@hooks/useAppSettings";
import useWizardData from "@hooks/useWizardData";
import classNames from "classnames";
import { FaCircle } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import { Fragment } from "react/jsx-runtime";

export default function SimpleArrowNavigator() {
  const { direction, steps, activeStep, passedSteps } = useWizardData();
  const { appDir } = useAppSettings();
  console.log(passedSteps);

  return (
    <Flex
      dir={direction === "horizontal" ? "row" : "col"}
      className={`${direction === "horizontal" ? "flex flex-col content-start items-start justify-start md:flex-row md:content-center md:items-center md:justify-center" : "content-start items-start justify-center"} w-full`}
      gap={20}
    >
      {steps.map((step, index) => {
        const lastIndex = steps.length - 1;
        return (
          <Fragment key={step.stepNum}>
            <FlexAllCentered
              gap={7}
              className={classNames(
                "text-dark-midnightBlue/50 dark:text-white/50",
                {
                  "text-dark-midnightBlue/100": passedSteps.includes(
                    step.stepNum,
                  ),
                  "!text-electricIndigo dark:!text-dark-electricLavender":
                    step.stepNum === activeStep,
                },
              )}
            >
              <FlexAllCentered
                className={classNames({
                  "size-5 rounded-full border-[1px] border-light-steelBlue/50 bg-light-steelBlue/20":
                    true,
                  "!border-none !bg-electricIndigo dark:!bg-dark-electricLavender":
                    step.stepNum === activeStep,
                })}
              >
                {step.stepNum === activeStep && (
                  <FaCircle size={10} className="text-white" />
                )}

                {passedSteps.includes(step.stepNum) && (
                  <GoCheck
                    size={12}
                    className="text-electricIndigo dark:text-dark-electricLavender"
                  />
                )}
              </FlexAllCentered>
              <p
                className={classNames({
                  "font-Medium_ir text-sm": true,
                  "text-dark-midnightBlue dark:text-white":
                    passedSteps.includes(step.stepNum),
                })}
              >
                {step.title}
              </p>
            </FlexAllCentered>
            {lastIndex !== index && (
              <div
                className={
                  appDir === "rtl" && direction === "horizontal"
                    ? "rotate-90 md:rotate-180"
                    : "rotate-90"
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-light-steelBlue/50 ${classNames({
                    "!fill-light-navyblue dark:!fill-white":
                      passedSteps.includes(step.stepNum),
                    "!fill-electricIndigo dark:!fill-dark-electricLavender":
                      step.stepNum === activeStep,
                  })}`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.51168 4.43045C6.82617 4.16088 7.29965 4.1973 7.56921 4.5118L13.5692 11.5118C13.81 11.7927 13.81 12.2071 13.5692 12.488L7.56921 19.488C7.29965 19.8025 6.82617 19.8389 6.51168 19.5693C6.19718 19.2998 6.16076 18.8263 6.43033 18.5118L12.012 11.9999L6.43033 5.48799C6.16076 5.17349 6.19718 4.70002 6.51168 4.43045ZM10.5119 4.43055C10.8264 4.16099 11.2998 4.19741 11.5694 4.5119L17.5694 11.5119C17.8102 11.7928 17.8102 12.2072 17.5694 12.4881L11.5694 19.4881C11.2998 19.8026 10.8264 19.839 10.5119 19.5694C10.1974 19.2999 10.161 18.8264 10.4305 18.5119L16.0122 12L10.4305 5.48809C10.161 5.17359 10.1974 4.70012 10.5119 4.43055Z"
                  />
                </svg>
              </div>
            )}
          </Fragment>
        );
      })}
    </Flex>
  );
}
