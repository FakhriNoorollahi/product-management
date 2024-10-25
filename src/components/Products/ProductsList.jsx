import React, { useState } from "react";
import styles from "./Products.module.css";
import ProductSearch from "./ProductSearch";
import AddProduct from "./AddProduct";
import ProductsTable from "./ProductsTable";
import { useProducts } from "../../hooks/queries";
import { useForm } from "react-hook-form";
import { useDeleteMultiProduct } from "../../hooks/mutations";
import Pagination from "../../ui/Pagination";

function ProductsList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { data, isPending, isError } = useProducts(page);
  const [multipleDelOpen, setMultipleDelOpen] = useState(false);
  const { register, getValues } = useForm();

  const products = data?.data?.data.filter((item) =>
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
    mutate(data);
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
        data={products}
        multipleDelOpen={multipleDelOpen}
        register={register}
        error={isError}
      />
      <Pagination
        page={page}
        setPage={setPage}
        totalPage={data?.data.totalPages}
      />
    </div>
  );
}

export default ProductsList;
