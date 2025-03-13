import { useChangeTitle } from "@hooks/useChangeTitle";
import Login from "../components/Login";

function LoginPage() {
  useChangeTitle("Login");
  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginPage;
