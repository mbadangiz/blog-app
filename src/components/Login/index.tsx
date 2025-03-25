import {
  CustomInputRHF,
  PasswordRHF,
} from "@core/components/FormFields/ReactHookFormCustomFields";
import { useLogin } from "@core/tanstack-hooks/auth/login";
import Button from "@FormFields/Initial/Button";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import LoginBG from "../../assets/Images/login-bg.png";

interface LoginFormData {
  emailOrUsername: string;
  password: string;
  rememberme: boolean;
}

function Login() {
  const { mutate: login, isPending } = useLogin();
  const navigate = useNavigate();

  const methods = useForm<LoginFormData>({
    defaultValues: {
      emailOrUsername: "",
      password: "",
      rememberme: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    login(data, {
      onSuccess: (success) => {
        if (success.success) {
          toast.success(success.message);
          localStorage.setItem("token", success.tokens);
          setTimeout(() => {
            navigate("/profile");
          }, 1000);
        } else {
          toast.error("Login failed please try again!");
        }
      },
      onError: (error: any) => {
        toast.error(error.response?.data?.message);
      },
    });
  };

  return (
    <div className="grid h-screen lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col items-center justify-center">
        <div className="grid max-w-[410px] gap-4">
          <h2 className="text-4xl font-bold">Sign In</h2>
          <p className="text-[#A3AED0]">
            Enter your username/email and password to sign in!
          </p>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="grid gap-6"
            >
              <CustomInputRHF
                name="emailOrUsername"
                label="Username / Email"
                className="w-full"
                placeholder="Enter your username or email"
                type="text"
                required
              />
              <PasswordRHF
                name="password"
                label="Password"
                className="w-full"
                placeholder="Enter your password"
                required
                minLength={8}
              />
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberme"
                  {...methods.register("rememberme")}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="rememberme" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <Button
                type="submit"
                className="w-full disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isPending}
              >
                {isPending ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </FormProvider>
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
