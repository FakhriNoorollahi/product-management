import React, { useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import Button from "../../ui/Button";
import styles from "./Products.module.css";
import AddEditeModal from "./AddEditeModal";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProducts } from "../../services/productsServices";

function AddProduct({ token }) {
  const [addModalOpen, setAddModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const { handleSubmit, register, reset } = useForm();
  const { mutate } = useMutation({
    mutationFn: addProducts,
  });

  const addNewProduct = (data) => {
    const { name, price, quantity } = data;
    if (!name && !price && !quantity) {
      toast.error("پر کردن فیلدها اجباری است");
      return;
    }
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["products"] });
        toast.success("کالا با موفقیت اضافه شد");
        setAddModalOpen(false);
      },
      onError: (err) => {
        toast.error(err.response.data.message);
        setAddModalOpen(false);
      },
    });
    reset();
  };

  return (
    <div className={styles.addProductContainer}>
      <div>
        <CiGrid41 />
        <p>مدیریت کالا</p>
      </div>
      <Button
        text="افزودن محصول"
        onOpen={() =>
          token
            ? setAddModalOpen(true)
            : toast.error("ابتدا وارد حساب کاربری خود شوید")
        }
      />
      {addModalOpen && (
        <AddEditeModal
          title="ایجاد محصول جدید"
          onClose={() => setAddModalOpen(false)}
          handleSubmit={handleSubmit}
          register={register}
          onHandle={addNewProduct}
        />
      )}
    </div>
  );
}

export default AddProduct;
