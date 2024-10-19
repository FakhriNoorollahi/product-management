import React, { useState } from "react";
import styles from "./Products.module.css";
import ProductSearch from "./ProductSearch";
import AddProduct from "./AddProduct";
import ProductsTable from "./ProductsTable";
import { useProducts } from "../../hooks/queries";

function ProductsList() {
  const [search, setSearch] = useState("");
  const { data, isPending } = useProducts();

  const products = data?.data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <ProductSearch search={search} setSearch={setSearch} />
      <AddProduct />
      <ProductsTable
        isPending={isPending}
        data={search.length ? products : data?.data}
      />
    </div>
  );
}

export default ProductsList;
