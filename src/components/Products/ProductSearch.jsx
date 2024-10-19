import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Products.module.css";

function ProductSearch({ search, setSearch, token = "" }) {
  return (
    <div className={styles.searchContainer}>
      <CiSearch />
      <input
        type="text"
        placeholder="جستجو کالا"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.informatin}>
        <img src="../../public/images/profile.png" alt="" />
        <div>
          <p>{!token ? "کاربر عادی" : "میلاد عظمی"}</p>
          <p>{!token ? "کاربر عادی" : "مدیر"}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
