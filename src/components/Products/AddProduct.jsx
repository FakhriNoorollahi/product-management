import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiGrid41 } from "react-icons/ci";
import styles from "./Products.module.css";
import Button from "../../ui/Button";
import AddEditeModal from "./AddEditeModal";
import { useAddNewProduct } from "../../hooks/mutations";
import { useCheckToken } from "../../hooks/checkToken";

function AddProduct() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();
  const { mutate } = useAddNewProduct();

  const addNewProduct = (data) => {
    const { name, price, quantity } = data;
    if (!name && !price && !quantity) {
      toast.error("پر کردن فیلدها اجباری است");
      return;
    }
    mutate(data, {
      onSuccess: (data) => {
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
        onOpen={() => useCheckToken(setAddModalOpen(true), navigate)}
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
