import React from "react";
import { tableTitles } from "../../utils/constants";
import styles from "./Products.module.css";
import Product from "./SingleProduct/Product";
import Loader from "../../ui/Loader";

function ProductsTable({
  isPending,
  products,
  multipleDelOpen,
  register,
  error,
}) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {tableTitles.map((item) => (
            <th key={item.id}>{item.title}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {isPending ? (
          <tr>
            <td style={{ textAlign: "center" }}>
              <Loader color="#3a8bed" />
            </td>
          </tr>
        ) : !products?.length || error ? (
          <tr style={{ textAlign: "center" }}>
            <td colSpan="5">کالایی وجود ندارد</td>
          </tr>
        ) : (
          products?.map((item) => (
            <Product
              key={item.id}
              product={item}
              multipleDelOpen={multipleDelOpen}
              register={register}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export default ProductsTable;
