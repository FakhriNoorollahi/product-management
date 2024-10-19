import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Form from "../../ui/Form/Form";
import { setCookie } from "../../utils/cookie";
import { useLogin } from "../../hooks/mutations";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();

  const handleForm = (data) => {
    mutate(data, {
      onSuccess: ({ data }) => {
        setCookie(data.token);
        toast.success("You have successfully logged in.");
        navigate("/products");
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    });
  };

  return (
    <Form
      header="فرم ورود"
      onSubmit={handleSubmit(handleForm)}
      isPending={isPending}
      textButton="ورود"
      textLink="ایجاد حساب کاربری"
      pathLink="/auth/register"
      register={register}
    />
  );
}

export default LoginForm;
