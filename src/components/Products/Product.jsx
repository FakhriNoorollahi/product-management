import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BiMessageSquareEdit } from "react-icons/bi";
import { HiTrash } from "react-icons/hi";
import styles from "./Products.module.css";
import Modal from "../../ui/Modal";
import AddEditeModal from "./AddEditeModal";
import { useDeleteProduct, useEditeProduct } from "../../hooks/mutations";
import { useCheckToken } from "../../hooks/checkToken";

function Product({ product }) {
  const { id, name, quantity, price } = product;
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editeModalOpen, setEditeModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { handleSubmit, register, reset } = useForm();
  const { mutate } = useEditeProduct();

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
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price} هزار تومان</td>
      <td>{id}</td>
      <td>
        <button
          onClick={() => useCheckToken(setEditeModalOpen(true), navigate)}
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
        <button
          onClick={() => useCheckToken(setDeleteModalOpen(true), navigate)}
        >
          <HiTrash />
        </button>
        {deleteModalOpen && (
          <DeleteModal
            queryClient={queryClient}
            setDeleteModalOpen={setDeleteModalOpen}
            id={id}
          />
        )}
      </td>
    </tr>
  );
}

export default Product;

function DeleteModal({ queryClient, setDeleteModalOpen, id }) {
  const { mutate } = useDeleteProduct();

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["products"] });
        toast.success("کالا با موفقیت حدف شد", { icon: "🗑" });
        onClose();
      },
      onError: (err) => {
        toast.error(err.response.data.message);
        onClose();
      },
    });
  };

  return (
    <Modal>
      <div className={styles.modal}>
        <img src="../../public/images/Close.png" alt="close-image" />
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div className={styles.modalBtn}>
          <button onClick={handleDelete}>حذف</button>
          <button onClick={() => setDeleteModalOpen(false)}>لغو</button>
        </div>
      </div>
    </Modal>
  );
}
