import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ProductInfoBtn from "./ProductInfoBtn";
import ProductEditeBtn from "./ProductEditeBtn";
import ProductDeleteBtn from "./ProductDeleteBtn";
import styles from "../Products.module.css";

function Product({ product, multipleDelOpen, register }) {
  const { id, name, quantity, price } = product;
  const queryClient = useQueryClient();
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
          <ProductEditeBtn
            queryClient={queryClient}
            navigate={navigate}
            id={id}
            product={product}
          />
          {multipleDelOpen ? (
            <div className={styles.checkbox}>
              <input type="checkbox" {...register("ids")} value={id} />
            </div>
          ) : (
            <ProductDeleteBtn
              queryClient={queryClient}
              navigate={navigate}
              id={id}
            />
          )}
        </div>
      </td>
    </tr>
  );
}

export default Product;
