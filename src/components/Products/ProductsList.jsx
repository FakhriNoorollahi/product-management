import React, { useState } from "react";
import ProductSearch from "./ProductSearch";
import styles from "./Products.module.css";
import AddProduct from "./AddProduct";
import ProductsTable from "./ProductsTable";
import { getProducts } from "../../services/productsServices";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utils/cookie";

function ProductsList() {
  const [search, setSearch] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const products = data?.data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const token = getCookie("token");

  return (
    <div className={styles.container}>
      <ProductSearch search={search} setSearch={setSearch} token={token} />
      <AddProduct token={token} />
      <ProductsTable
        isPending={isPending}
        data={search.length ? products : data?.data}
        token={token}
      />
    </div>
  );
}

export default ProductsList;
