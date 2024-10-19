import React from "react";
import { tableTitles } from "../../utils/constants";
import styles from "./Products.module.css";

import Product from "./Product";

function ProductsTable({ isPending, data }) {
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
        {isPending && (
          <tr>
            <th>loading....</th>
          </tr>
        )}
        {!data?.length ? (
          <tr style={{ textAlign: "center" }}>
            <td colSpan="5">کالایی با این نام وجود ندارد</td>
          </tr>
        ) : (
          data?.map((item) => <Product key={item.id} product={item} />)
        )}
      </tbody>
    </table>
  );
}

export default ProductsTable;
