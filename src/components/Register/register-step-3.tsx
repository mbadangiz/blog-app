import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  CustomInputRHF,
  PasswordRHF,
} from "@core/components/FormFields/ReactHookFormCustomFields";
import Button from "@FormFields/Initial/Button";
import { useRegister } from "@core/providers/RegisterProvider";
import {
  In_RegisterStep3Response,
  RegisterStep3Data,
} from "@core/types/interfaces";
import { useRegisterStep3 } from "@core/tanstack-hooks/auth/register/step3";
import toast from "react-hot-toast";

const Register_Step_3 = () => {
  const navigate = useNavigate();
  const { setStep3Data, step1Data, step2Data } = useRegister();

  const { mutate: registerStep3, isPending } = useRegisterStep3();

  const methods = useForm<RegisterStep3Data>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: RegisterStep3Data) => {
    registerStep3(
      {
        username: data.username,
        password: data.password,
        email: step1Data?.email!,
      },
      {
        onSuccess: (successData: In_RegisterStep3Response) => {
          if (successData.success) {
            localStorage.setItem("token", successData.token);
            toast.success(successData.message);
            setTimeout(() => {
              navigate("/profile");
            }, 1500);
          } else {
            toast.error(successData.message);
          }
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };

  if (!step1Data?.email || !step2Data?.otp) {
    navigate("/sign-up");
    return null;
  }

  return (
    <FormProvider {...methods}>
      <div className="grid gap-3">
        <h2 className="text-2xl font-bold">Complete your profile</h2>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-4">
          <CustomInputRHF
            name="username"
            placeholder="Choose a username"
            type="text"
            required
            label="Username"
            minLength={3}
            maxLength={20}
          />
          <PasswordRHF
            name="password"
            placeholder="Choose a password"
            className="!w-full"
            required
            label="Password"
            minLength={8}
          />
          <Button
            type="submit"
            disabled={isPending}
            className="disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? "Signing up..." : "Complete Registration"}
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};

export default Register_Step_3;
