import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CustomInputRHF } from "@core/components/FormFields/ReactHookFormCustomFields";
import Button from "@FormFields/Initial/Button";
import { useRegister } from "@core/providers/RegisterProvider";
import {
  In_RegisterStep1Response,
  RegisterStep1Data,
} from "@core/types/interfaces";
import { useRegisterStep1 } from "@core/tanstack-hooks/auth/register/step1";
import { toast } from "react-hot-toast";

const Register_Step_1 = () => {
  const navigate = useNavigate();
  const { setStep1Data } = useRegister();

  const { mutate: registerStep1, isPending } = useRegisterStep1();

  const methods = useForm<RegisterStep1Data>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: RegisterStep1Data) => {
    registerStep1(
      { email: data.email },
      {
        onSuccess: (successData: In_RegisterStep1Response) => {
          if (successData.success) {
            setStep1Data({ email: data.email });
            toast.success(successData.message);
            setTimeout(() => {
              navigate("/sign-up/verify");
            }, 1500);
          } else {
            toast.error(successData.message);
          }
        },
        onError: (error) => {
          console.log(error);
          toast.error(error.message);
        },
      },
    );
  };

  return (
    <FormProvider {...methods}>
      <div className="grid gap-3">
        <h2 className="text-2xl font-bold">Enter your email</h2>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-4">
          <CustomInputRHF
            name="email"
            label="Email"
            placeholder="mail@example.com"
            type="email"
            required
          />
          <Button
            type="submit"
            disabled={isPending}
            className="disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};

export default Register_Step_1;
