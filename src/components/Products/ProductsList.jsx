import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import ProductSearch from "./ProductSearch";
import AddProduct from "./AddProduct";
import ProductsTable from "./ProductsTable";
import { useProducts } from "../../hooks/queries";
import { useForm } from "react-hook-form";
import { useDeleteMultiProduct } from "../../hooks/mutations";
import Pagination from "../../ui/Pagination";
import { useSearchParams } from "react-router-dom";

function ProductsList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);
  const { data, isFetching, isError } = useProducts(page, search, pageSearch);

  const [multipleDelOpen, setMultipleDelOpen] = useState(false);
  const { register, getValues, reset } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

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

    if (data.ids === false) {
      setMultipleDelOpen(false);
      return;
    }

    mutate(data);
    setMultipleDelOpen(false);
    reset();
  };

  useEffect(() => {
    if (!search) {
      setSearchParams({ page, limit: 10 });
      return;
    }
    setSearchParams({ page: pageSearch, limit: 10, name: search });
  }, [page, search, pageSearch]);

  useEffect(() => {
    setPageSearch(1);
  }, [search]);

  return (
    <div className={styles.container}>
      <ProductSearch search={search} setSearch={setSearch} />
      <AddProduct
        multiDel={multipleDelOpen}
        onMultiDel={handlerMultiDelButton}
      />
      <ProductsTable
        isPending={isFetching}
        products={data?.data.data}
        multipleDelOpen={multipleDelOpen}
        register={register}
        error={isError}
      />
      <Pagination
        page={search ? pageSearch : page}
        setPage={search ? setPageSearch : setPage}
        totalPage={data?.data.totalPages}
      />
    </div>
  );
}

export default ProductsList;
