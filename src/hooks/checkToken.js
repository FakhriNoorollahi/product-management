import toast from "react-hot-toast";
import { getCookie } from "../utils/cookie";

export const useCheckToken = (handlerCb, navigate) => {
  const token = getCookie("token");

  if (token) {
    handlerCb();
    return;
  }
  toast.error("ابتدا وارد حساب کاربری خود شوید");
  navigate("/auth/login");
};
