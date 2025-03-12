import ToastContainer from "@coreComps/ToastContainer";
import AppsSettingProvider from "@providers/AppsSettingProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  getDirLocalStorage,
  getThemeLocalStorage,
} from "@utils/getAppSettingsLocalStorage";
import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./routes";
const queryClient = new QueryClient();

function App() {
  return (
    <AppsSettingProvider
      theme={getThemeLocalStorage()}
      dir={getDirLocalStorage()}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={myRoutes} />
        <ToastContainer />
      </QueryClientProvider>
    </AppsSettingProvider>
  );
}

export default App;
