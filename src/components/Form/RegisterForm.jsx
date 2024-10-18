import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "../../ui/Form/Form";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../../services/authServices";
import toast from "react-hot-toast";

function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { mutate, data, isPending } = useMutation({
    mutationFn: addUser,
    onSuccess: (data) => {
      toast.success("You have successfully registered.");
      navigate("/auth/login");
    },
    onError: (err) => toast.error(err.response.data.message),
  });

  const handleForm = (data) => {
    const { username, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toast.error("Password & Confirm Password do not match!");
      return;
    }

    mutate({ username, password });
  };

  return (
    <Form header="فرم ثبت نام">
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
        <Input
          register={register}
          name="confirmPassword"
          type="password"
          placeholder="تکرار رمز عبور"
        />
        <Button text="ثبت نام" />
        <NavLink to="/auth/login">حساب کاربری دارید؟</NavLink>
      </form>
    </Form>
  );
}

export default RegisterForm;
