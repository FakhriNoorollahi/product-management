import React, { useState } from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import { HiTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import styles from "./Products.module.css";
import AddEditeModal from "./AddEditeModal";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, editeProduct } from "../../services/productsServices";
import { useForm } from "react-hook-form";

function Product({ product, token }) {
  const { id, name, quantity, price } = product;
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editeModalOpen, setEditeModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const { handleSubmit, register, reset } = useForm();
  const { mutate } = useMutation({
    mutationFn: editeProduct,
  });

  const editeProducts = (data) => {
    mutate({id,data}, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["products"] });
        toast.success("کالا با موفقیت ویرایش شد");
        setEditeModalOpen(false);
      },
      onError: (err) => {
        toast.error(err.response.data.message);
        setEditeModalOpen(false);
      },
    });
    reset();
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price} هزار تومان</td>
      <td>{id}</td>
      <td>
        <button
          onClick={() =>
            token
              ? setEditeModalOpen(true)
              : toast.error("ابتدا وارد حساب کاربری خود شوید")
          }
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
          onClick={() =>
            token
              ? setDeleteModalOpen(true)
              : toast.error("ابتدا وارد حساب کاربری خود شوید")
          }
        >
          <HiTrash />
        </button>
        {deleteModalOpen && (
          <DeleteModal setDeleteModalOpen={setDeleteModalOpen} id={id} />
        )}
      </td>
    </tr>
  );
}

export default Product;

function DeleteModal({ setDeleteModalOpen, id }) {
  const { mutate } = useMutation({ mutationFn: deleteProduct });
  const queryClient = useQueryClient();

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
