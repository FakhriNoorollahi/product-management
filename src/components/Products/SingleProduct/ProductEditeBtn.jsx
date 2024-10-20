import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiMessageSquareEdit } from "react-icons/bi";
import styles from "../Products.module.css";
import AddEditeModal from "../AddEditeModal";
import { useEditeProduct } from "../../../hooks/mutations";
import { useCheckToken } from "../../../hooks/checkToken";

function ProductEditeBtn({ queryClient, navigate, id, product }) {
  const [editeModalOpen, setEditeModalOpen] = useState(false);
  const { mutate } = useEditeProduct();
  const { handleSubmit, register, reset } = useForm();

  const editeProducts = (data) => {
    mutate(
      { id, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["products"] });
          toast.success("کالا با موفقیت ویرایش شد");
          reset();
          setEditeModalOpen(false);
        },
        onError: (err) => {
          toast.error(err.response.data.message);
          setEditeModalOpen(false);
        },
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
