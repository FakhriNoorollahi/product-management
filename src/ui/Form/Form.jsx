import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Form.module.css";
import { inputForm } from "../../utils/constants";
import Input from "../Input";
import Button from "../Button";

function Form({
  header,
  register,
  isPending,
  onSubmit,
  textButton,
  textLink,
  pathLink,
  children,
}) {
  return (
    <div className={styles.formContainer}>
      <NavLink to="/products" className={styles.title}>
        بوت کمپ بوتو استارت
      </NavLink>
      <div className={styles.form}>
        <img src="../../public/images/Union.png" alt="logo" />
        <p>{header}</p>
        <form onSubmit={onSubmit}>
          {inputForm.map((item) => (
            <Input
              key={item.id}
              register={register}
              name={item.name}
              type={item.type}
              placeholder={item.placeHolder}
            />
          ))}
          {children}
          <Button type="submit" text={textButton} isPending={isPending} />
          <NavLink to={pathLink}>{textLink}</NavLink>
        </form>
      </div>
    </div>
  );
}

export default Form;
