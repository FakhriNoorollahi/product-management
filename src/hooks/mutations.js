import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser, loginUser } from "../services/authServices";
import {
  addProducts,
  deleteMultiProduct,
  deleteProduct,
  editeProduct,
} from "../services/productsServices";
import toast from "react-hot-toast";

export function useRegister() {
  const { mutate, isPending } = useMutation({
    mutationFn: addUser,
    onSuccess: ({ data }) => toast.success(data.message),
    onError: (err) => toast.error(err.response.data.message),
  });

  return { mutate, isPending };
}

export function useLogin() {
  const { mutate } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => toast.success("You have successfully logged in."),
    onError: (err) => toast.error(err.response.data.message),
  });

  return { mutate };
}

export function useAddNewProduct() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("کالا با موفقیت اضافه شد");
    },
    onError: (err) => toast.error(err.response.data.message),
  });
  return { mutate };
}

export function useEditeProduct() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: editeProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("کالا با موفقیت ویرایش شد");
    },
    onError: (err) => toast.error(err.response.data.message),
  });

  return { mutate };
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("کالا با موفقیت حذف شد", { icon: "🗑" });
    },
    onError: (err) => toast.error(err.response.data.message),
  });

  return { mutate };
}

export function useDeleteMultiProduct() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteMultiProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("کالاهای انتخابی با موفقیت حذف شدند", { icon: "🗑" });
    },
    onError: (err) => toast.error(err.response.data.message),
  });
  return { mutate };
}
