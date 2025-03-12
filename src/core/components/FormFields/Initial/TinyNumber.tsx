import Flex, { FlexAllCentered } from "@coreComps/Divisions/Flex";
import { In_TinyNumberProps } from "@core/types/interfaces";
import { forwardRef, useEffect } from "react";

export const TinyNumber = forwardRef<HTMLInputElement, In_TinyNumberProps>(
  function CustomInput(
    {
      setValue,
      name,
      id,
      label,
      required,
      InitialNumber,
      setInitialNumber,
      ...props
    },
    ref,
  ) {
    useEffect(() => {
      setValue!(name!, InitialNumber);
    }, [InitialNumber]);

    return (
      <Flex dir="col" className={`w-max select-none`}>
        <label htmlFor={id} className="mb-3 font-Medium_ir text-sm">
          {label}
          <span className="text-electricIndigo dark:text-dark-electricLavender">
            {required && "*"}
          </span>
        </label>
        <FlexAllCentered className="relative w-max gap-1">
          <FlexAllCentered
            className="size-[18px] cursor-pointer rounded bg-electricIndigo text-white dark:bg-dark-electricLavender"
            onClick={() => setInitialNumber((prev) => prev - 1)}
          >
            -
          </FlexAllCentered>
          <FlexAllCentered
            className={`h-9 w-20 rounded-md bg-light-steelBlue/20 text-center text-sm`}
          >
            {InitialNumber}
          </FlexAllCentered>
          <input
            type={"number"}
            hidden={true}
            id={id}
            ref={ref}
            value={InitialNumber}
            required={required}
            {...props}
          />
          <FlexAllCentered
            className="size-[18px] cursor-pointer rounded bg-electricIndigo text-white dark:bg-dark-electricLavender"
            onClick={() => setInitialNumber((prev) => prev + 1)}
          >
            +
          </FlexAllCentered>
        </FlexAllCentered>
      </Flex>
    );
  },
);
