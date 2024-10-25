import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../../ui/Input";
import Form from "../../ui/Form/Form";
import { useRegister } from "../../hooks/mutations";
import { getCookie } from "../../utils/cookie";
import { checkFormInputIsEmpty } from "../../utils/helper";

function RegisterForm() {
  const { register, handleSubmit, getValues } = useForm();
  const navigate = useNavigate();
  const { mutate, isPending } = useRegister();
  const token = getCookie("token");

  const handleForm = (data) => {
    const { username, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toast.error("Password & Confirm Password do not match!");
      return;
    }

    mutate(
      { username, password },
      {
        onSuccess: () => navigate("/auth/login"),
      }
    );
  };

  const handlerButton = () => {
    const { username, password, confirmPassword } = getValues();
    checkFormInputIsEmpty({ username, password, confirmPassword });
  };

  useEffect(() => {
    if (token) navigate("/products");
  }, [token, navigate]);

  return (
    <Form
      header="فرم ثبت نام"
      onSubmit={handleSubmit(handleForm)}
      isPending={isPending}
      textButton="ثبت نام"
      textLink="حساب کاربری دارید؟"
      pathLink="/auth/login"
      register={register}
      onButton={handlerButton}
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
