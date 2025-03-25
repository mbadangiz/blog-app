import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CustomInputRHF } from "@core/components/FormFields/ReactHookFormCustomFields";
import Button from "@FormFields/Initial/Button";
import { useRegister } from "@core/providers/RegisterProvider";
import {
  In_RegisterStep2Response,
  RegisterStep2Data,
} from "@core/types/interfaces";
import { useRegisterStep2 } from "@core/tanstack-hooks/auth/register/step2";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Register_Step_2 = () => {
  const navigate = useNavigate();
  const { setStep2Data, step1Data } = useRegister();

  const { mutate: registerStep2, isPending } = useRegisterStep2();

  const methods = useForm<RegisterStep2Data>({
    defaultValues: {
      otp: "",
    },
  });

  useEffect(() => {
    if (!step1Data?.email) {
      navigate("/sign-up");
      return;
    }
  }, [step1Data?.email, navigate]);

  const onSubmit = (data: RegisterStep2Data) => {
    // setStep2Data({ otp: data.otp });
    // navigate("/sign-up/complete");

    registerStep2(
      { email: step1Data?.email!, verificationCode: data.otp },
      {
        onSuccess: (successData: In_RegisterStep2Response) => {
          if (successData.success) {
            setStep2Data({ otp: data.otp });
            toast.success(successData.message);
            setTimeout(() => {
              navigate("/sign-up/complete");
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

  return (
    <FormProvider {...methods}>
      <div className="grid gap-3">
        <h2 className="text-2xl font-bold">Verify your email</h2>
        <p className="text-gray-600">
          We've sent a verification code to {step1Data?.email}
        </p>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-4">
          <CustomInputRHF
            name="otp"
            placeholder="Enter verification code"
            label="Verification code"
            type="text"
            required
            maxLength={6}
            pattern="[0-9]*"
          />
          <Button
            type="submit"
            disabled={isPending}
            className="disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? "Verifying..." : "Verify"}
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};

export default Register_Step_2;
