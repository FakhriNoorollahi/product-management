import toast from "react-hot-toast";

export const createPaginationArray = (totalPage) => {
  const arr = [];
  for (let i = 1; i <= totalPage; i++) {
    arr.push(i);
  }
  return arr;
};

export const checkFormInputIsEmpty = ({
  username,
  password,
  confirmPassword = true,
}) => {
  if (username && password && confirmPassword) {
    return;
  }

  toast.error("فیلدهای خالی را پر کنید");
  return;
};
