import { useChangeTitle } from "@hooks/useChangeTitle";
import Login from "../components/Login";

function LoginPage() {
  useChangeTitle("ورود");
  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginPage;
