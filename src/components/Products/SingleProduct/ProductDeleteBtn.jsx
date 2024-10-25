import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";
import toast from "react-hot-toast";
import styles from "../Products.module.css";
import { useCheckToken } from "../../../hooks/checkToken";
import { useDeleteProduct } from "../../../hooks/mutations";
import Modal from "../../../ui/Modal";

function ProductDeleteBtn({ navigate, id }) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const openModal = () => setDeleteModalOpen(true);

  return (
    <>
      <button
        className={styles.productDelModalBtn}
        onClick={() => useCheckToken(openModal, navigate)}
      >
        <HiTrash />
      </button>
      {deleteModalOpen && (
        <DeleteModal id={id} onClose={() => setDeleteModalOpen(false)} />
      )}
    </>
  );
}

export default ProductDeleteBtn;

function DeleteModal({ id, onClose }) {
  const { mutate } = useDeleteProduct();

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => onClose(),
      onError: () => onClose(),
    });
  };

  return (
    <Modal>
      <div className={styles.modal}>
        <img src="../../public/images/Close.png" alt="close-image" />
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div className={styles.modalBtn}>
          <button onClick={handleDelete}>حذف</button>
          <button onClick={onClose}>لغو</button>
        </div>
      </div>
    </Modal>
  );
}
