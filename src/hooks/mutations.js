import { useMutation } from "@tanstack/react-query";
import { addUser, loginUser } from "../services/authServices";
import {
  addProducts,
  deleteProduct,
  editeProduct,
} from "../services/productsServices";

export function useRegister() {
  const { mutate, isPending } = useMutation({
    mutationFn: addUser,
  });

  return { mutate, isPending };
}

export function useLogin() {
  const { mutate } = useMutation({
    mutationFn: loginUser,
  });

  return { mutate };
}

export function useAddNewProduct() {
  const { mutate } = useMutation({
    mutationFn: addProducts,
  });
  return { mutate };
}

export function useEditeProduct() {
  const { mutate } = useMutation({
    mutationFn: editeProduct,
  });

  return { mutate };
}

export function useDeleteProduct() {
  const { mutate } = useMutation({ mutationFn: deleteProduct });

  return { mutate };
}
