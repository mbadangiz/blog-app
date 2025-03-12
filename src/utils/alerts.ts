import useAppSettings from "@hooks/useAppSettings";
import { In_AlertOptions } from "@typesDef/interfaces";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export function useSweetAlert() {
  const { themeSchema } = useAppSettings();

  const themeSettings = {
    background: themeSchema === "light" ? "#fff" : "#111C44",
    color: themeSchema === "light" ? "#444" : "#fff",
  };

  function simpleAlert(options: In_AlertOptions) {
    MySwal.fire({
      icon: "success",
      confirmButtonColor: themeSchema === "light" ? "#4318FF" : "#7551FF",
      ...themeSettings,
      ...options,
    });
  }

  function alertWithDialog(
    initialOption: In_AlertOptions,
    successOptions: In_AlertOptions,
    failureOptions: In_AlertOptions,
    successFunctionality?: Function,
    failureFunctionality?: Function,
  ) {
    MySwal.fire({
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonColor: "#01B574",
      ...themeSettings,
      ...initialOption,
    }).then((result) => {
      if (result.isConfirmed) {
        if (successFunctionality) {
          successFunctionality();
        }

        Swal.fire({ icon: "success", ...themeSettings, ...successOptions });
      } else if (result.isDenied) {
        if (failureFunctionality) {
          failureFunctionality();
        }
        Swal.fire({ icon: "error", ...themeSettings, ...failureOptions });
      }
    });
  }

  return { simpleAlert, alertWithDialog };
}
