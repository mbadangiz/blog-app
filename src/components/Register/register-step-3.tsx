import CustomInput from "@FormFields/Initial/Input";

const Register_Step_3 = () => {
  return (
    <div className="grid gap-3">
      <CustomInput label="Username" placeholder="username" />
      <CustomInput label="Password" placeholder="Min. 8 characters" />
    </div>
  );
};

export default Register_Step_3;
