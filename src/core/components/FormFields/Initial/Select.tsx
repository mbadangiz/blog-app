import { selectIn_styleConfigs } from "@core/configs/styleConfigs/FormFields";
import { In_ReactSelectProps } from "@core/types/interfaces";
import useAppSettings from "@hooks/useAppSettings";
import { forwardRef } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import ReactSelect from "react-select";

const Select = forwardRef<
  any,
  In_ReactSelectProps & { error?: FieldErrors<FieldValues> }
>(
  (
    {
      isMulti = false,
      required = false,
      name = "",
      label,
      id,
      extraClass,
      options,
      error,
      ...props
    },
    ref,
  ) => {
    const themeMode = useAppSettings().themeSchema;

    const err = error && error[name] ? true : false;
    const { classes, selectThemeColors, customStyles } = selectIn_styleConfigs(
      themeMode ? themeMode : "light",
      err,
    );

    return (
      <div className={`max-w-64 ${extraClass} space-y-3`}>
        <label htmlFor={id} className="font-Medium_ir mb-6 text-sm">
          {label}
          <span className="text-electricIndigo dark:text-dark-electricLavender">
            {required && "*"}
          </span>
        </label>
        <ReactSelect
          {...props}
          ref={ref}
          isMulti={isMulti}
          theme={selectThemeColors}
          className="react-select"
          classNamePrefix="select"
          styles={{ ...customStyles }}
          classNames={classes}
          options={options ? options : []}
          required={required}
        />
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
