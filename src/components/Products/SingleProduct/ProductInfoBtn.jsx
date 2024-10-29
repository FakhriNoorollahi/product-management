import React, { useState } from "react";
import { HiEye } from "react-icons/hi";
import styles from "../Products.module.css";
import Loader from "../../../ui/Loader";
import { useProductInfo } from "../../../hooks/queries";
import Modal from "../../../ui/Modal";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useCheckToken } from "../../../hooks/checkToken";

function ProductInfoBtn({ id, navigate }) {
  const [showProdoctModal, setShowProductModal] = useState(false);
  const onClose = () => setShowProductModal(false);

  return (
    <>
      <button
        className={styles.productInfoModalBtn}
        onClick={() => useCheckToken(() => setShowProductModal(true), navigate)}
      >
        <HiEye />
      </button>
      {showProdoctModal && <ProductInformation id={id} onClose={onClose} />}
    </>
  );
}

export default ProductInfoBtn;

function ProductInformation({ id, onClose }) {
  const { data, isPending } = useProductInfo(id);

  return (
    <Modal>
      <div className={styles.productInfoModal}>
        <div className={styles.headerModal}>
          <button className={styles.headerModalBtn} onClick={onClose}>
            <FaRegCircleXmark />
          </button>
        </div>
        {isPending ? (
          <Loader />
        ) : (
          <div className={styles.infoContainer}>
            <h1>{data.data.name}</h1>
            <div className={styles.infoDiv}>
              <span>قیمت</span>
              <span>{data.data.price}</span>
            </div>
            <div className={styles.infoDiv}>
              <span>موجودی</span>
              <span>{data.data.quantity}</span>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
