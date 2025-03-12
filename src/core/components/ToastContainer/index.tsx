import useAppSettings from "@hooks/useAppSettings";
import { Toaster } from "react-hot-toast";

function ToastContainer() {
  const { themeSchema } = useAppSettings();

  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: themeSchema === "light" ? "#fff" : "#664ad8",
          color: themeSchema === "light" ? "#3b3b3b" : "#fff",
        },
      }}
    />
  );
}

export default ToastContainer;
