import React from "react";
import Input from "../../ui/Input";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Form from "../../ui/Form/Form";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/authServices";
import toast from "react-hot-toast";
import { setCookie } from "../../utils/cookie";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: loginUser,
    onSuccess: ({ data }) => {
      setCookie(data.token);
      toast.success("You have successfully logged in.");
      navigate("/products");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  const handleForm = (data) => {
    mutate(data);
  };

  return (
    <Form header="فرم ورود">
      <form onSubmit={handleSubmit(handleForm)}>
        <Input
          register={register}
          name="username"
          type="text"
          placeholder="نام کاربری"
        />
        <Input
          register={register}
          name="password"
          type="password"
          placeholder="رمز عبور"
        />
        <Button text="ورود" />
        <NavLink to="/auth/register">ایجاد حساب کاربری!</NavLink>
      </form>
    </Form>
  );
}

export default LoginForm;
