import React from "react";
import { useNavigate } from "react-router-dom";
import ProductInfoBtn from "./ProductInfoBtn";
import ProductEditeBtn from "./ProductEditeBtn";
import ProductDeleteBtn from "./ProductDeleteBtn";
import styles from "../Products.module.css";

function Product({ product, multipleDelOpen, register }) {
  const { id, name, quantity, price } = product;
  const navigate = useNavigate();

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price} تومان</td>
      <td>{id}</td>
      <td>
        <div className={styles.columnBtns}>
          <ProductInfoBtn id={id} />
          <ProductEditeBtn navigate={navigate} id={id} product={product} />
          {multipleDelOpen ? (
            <div className={styles.checkbox}>
              <input type="checkbox" {...register("ids")} value={id} />
            </div>
          ) : (
            <ProductDeleteBtn navigate={navigate} id={id} />
          )}
        </div>
      </td>
    </tr>
  );
}

export default Product;
