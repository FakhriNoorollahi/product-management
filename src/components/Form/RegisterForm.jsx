import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../../ui/Input";
import Form from "../../ui/Form/Form";
import { useRegister } from "../../hooks/mutations";

function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { mutate, isPending } = useRegister();

  const handleForm = (data) => {
    const { username, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toast.error("Password & Confirm Password do not match!");
      return;
    }

    mutate(
      { username, password },
      {
        onSuccess: ({ data }) => {
          toast.success(data.message);
          navigate("/auth/login");
        },
        onError: (err) => toast.error(err.response.data.message),
      }
    );
  };

  return (
    <Form
      header="فرم ثبت نام"
      onSubmit={handleSubmit(handleForm)}
      isPending={isPending}
      textButton="ثبت نام"
      textLink="حساب کاربری دارید؟"
      pathLink="/auth/login"
      register={register}
    >
      <Input
        register={register}
        name="confirmPassword"
        type="password"
        placeholder="تکرار رمز عبور"
      />
    </Form>
  );
}

export default RegisterForm;
