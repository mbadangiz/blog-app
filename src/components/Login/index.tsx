import Button from "@FormFields/Initial/Button";
import LoginBG from "../../assets/Images/login-bg.png";
import CustomInput from "../../core/components/FormFields/Initial/Input";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="grid h-screen lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col items-center justify-center">
        <div className="grid max-w-[410px] gap-4">
          <h2 className="text-4xl font-bold">Sign In</h2>
          <p className="text-[#A3AED0]">
            Enter your email and password to sign in!
          </p>
          <form action="" className="grid gap-6">
            <CustomInput
              label="Email"
              className="w-full"
              placeholder="mail@simmmple.com"
            />
            <CustomInput
              label="Password"
              className="w-full"
              placeholder="Min. 8 characters"
            />
            <Button className={"w-full"}>Sign In</Button>
          </form>
          <Link to="/sign-up" className="mt-2 text-sm">
            Not registered yet?{" "}
            <span className="text-[#4318FF]">Create an Account</span>
          </Link>
        </div>
      </div>
      <div className="hidden h-full overflow-hidden rounded-bl-[180px] lg:block">
        <img src={LoginBG} alt="" className="h-full w-full" />
      </div>
    </div>
  );
}

export default Login;
