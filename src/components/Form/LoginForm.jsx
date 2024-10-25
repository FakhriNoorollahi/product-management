import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form/Form";
import { getCookie, setCookie } from "../../utils/cookie";
import { useLogin } from "../../hooks/mutations";
import { saveLocalStorage } from "../../utils/localStorage";
import toast from "react-hot-toast";
import { checkFormInputIsEmpty } from "../../utils/helper";

function LoginForm() {
  const { mutate, isPending } = useLogin();
  const { register, handleSubmit, getValues } = useForm();
  const navigate = useNavigate();
  const token = getCookie("token");

  const handleForm = (data) => {
    const { username } = data;

    mutate(data, {
      onSuccess: ({ data }) => {
        setCookie(data.token);
        saveLocalStorage("username", username);
        navigate("/products");
      },
    });
  };

  const handleButton = () => {
    const { username, password } = getValues();
    checkFormInputIsEmpty({username, password});
  };

  useEffect(() => {
    if (token) navigate("/products");
  }, [token, navigate]);

  return (
    <Form
      header="فرم ورود"
      onSubmit={handleSubmit(handleForm)}
      isPending={isPending}
      textButton="ورود"
      textLink="ایجاد حساب کاربری"
      pathLink="/auth/register"
      register={register}
      onButton={handleButton}
    />
  );
}

export default LoginForm;
