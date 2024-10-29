import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiMessageSquareEdit } from "react-icons/bi";
import styles from "../Products.module.css";
import AddEditeModal from "../AddEditeModal";
import { useEditeProduct } from "../../../hooks/mutations";
import toast from "react-hot-toast";
import { getCookie } from "../../../utils/cookie";
import { useCheckToken } from "../../../hooks/checkToken";

function ProductEditeBtn({ id, product, navigate }) {
  const [editeModalOpen, setEditeModalOpen] = useState(false);
  const { mutate } = useEditeProduct();
  const { handleSubmit, register, reset, getValues } = useForm();
  const token = getCookie("token");

  const editeProducts = (data) => {
    const { name, quantity, price } = getValues();
    const {
      name: productName,
      price: productPrice,
      quantity: productQuantity,
    } = product;
    if (
      productName === data.name &&
      productQuantity === data.quantity &&
      productPrice === data.price &&
      token
    ) {
      toast("تغییری در اطلاعات ایجاد نکردید!", { icon: "❗" });
      setEditeModalOpen(false);
      return;
    }

    if (!name || !price || !quantity) {
      toast.error("فیلدهای خالی را پر کنید");
      return;
    }

    if (getValues)
      mutate(
        { id, data },
        {
          onSuccess: () => {
            reset();
            setEditeModalOpen(false);
          },
          onError: () => setEditeModalOpen(false),
        }
      );
  };

  return (
    <>
      <button
        className={styles.productEditeModalBtn}
        onClick={() => useCheckToken(() => setEditeModalOpen(true), navigate)}
      >
        <BiMessageSquareEdit />
      </button>
      {editeModalOpen && (
        <AddEditeModal
          title="ویرایش اطلاعات"
          onClose={() => setEditeModalOpen(false)}
          product={product}
          handleSubmit={handleSubmit}
          register={register}
          onHandle={editeProducts}
        />
      )}
    </>
  );
}

export default ProductEditeBtn;
