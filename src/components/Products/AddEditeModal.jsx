import React from "react";
import InputLabel from "../../ui/InputLabel";
import styles from "./Products.module.css";
import { AddEditeFormTitles, productInformation } from "../../utils/constants";
import Modal from "../../ui/Modal";

function AddEditeModal({
  title,
  onClose,
  product = null,
  handleSubmit,
  register,
  onHandle,
}) {
  const info = productInformation;

  return (
    <Modal>
      <div className={styles.modalAddEdite}>
        <p>{title}</p>
        <form onSubmit={handleSubmit(onHandle)}>
          <div className={styles.inputLabel}>
            {AddEditeFormTitles.map((item, index) => {
              console.log(item);
              return (
                <InputLabel
                  key={item.id}
                  label={item.title}
                  placeHolder={item.placeHolder}
                  name={item.name}
                  register={register}
                  value={!product ? "" : product[info[index]]}
                />
              );
            })}
          </div>
          <div className={styles.btns}>
            <button type="submit">ایجاد</button>
            <button onClick={onClose}>انصراف</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddEditeModal;
