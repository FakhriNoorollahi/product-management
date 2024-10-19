import React, { useState } from "react";
import styles from "./Products.module.css";
import ProductSearch from "./ProductSearch";
import AddProduct from "./AddProduct";
import ProductsTable from "./ProductsTable";
import { useProducts } from "../../hooks/queries";
import { useForm } from "react-hook-form";
import { useDeleteMultiProduct } from "../../hooks/mutations";

function ProductsList() {
  const [search, setSearch] = useState("");
  const { data, isPending } = useProducts();
  const [multipleDelOpen, setMultipleDelOpen] = useState(false);
  const { register, getValues } = useForm();

  const products = data?.data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlerMultiDelButton = () => {
    if (!multipleDelOpen) {
      setMultipleDelOpen(true);
      return;
    }

    handleButtonClick();
  };
  const { mutate } = useDeleteMultiProduct();
  const handleButtonClick = () => {
    const data = getValues();
    mutate(data.delMulti);
    setMultipleDelOpen(false);
  };

  return (
    <div className={styles.container}>
      <ProductSearch search={search} setSearch={setSearch} />
      <AddProduct
        multiDel={multipleDelOpen}
        onMultiDel={handlerMultiDelButton}
      />
      <ProductsTable
        isPending={isPending}
        data={search.length ? products : data?.data}
        multipleDelOpen={multipleDelOpen}
        register={register}
      />
    </div>
  );
}

export default ProductsList;
