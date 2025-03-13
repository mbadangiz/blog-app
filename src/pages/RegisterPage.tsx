import { useChangeTitle } from "@hooks/useChangeTitle";

import Register from "../components/Register";

function RegisterPage() {
  useChangeTitle("Register");
  return <Register />;
}

export default RegisterPage;
