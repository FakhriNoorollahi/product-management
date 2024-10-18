import React from "react";
import styles from "./Form.module.css";

function Form({ header, children }) {
  return (
    <div className={styles.formContainer}>
      <p className={styles.title}>بوت کمپ بوتو استارت</p>
      <div className={styles.form}>
        <img src="../../public/images/Union.png" alt="logo" />
        <p>{header}</p>
        {children}
      </div>
    </div>
  );
}

export default Form;
