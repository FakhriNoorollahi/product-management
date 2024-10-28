import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Products.module.css";
import { getDataLocalStorage } from "../../utils/localStorage";

function ProductSearch({ search, setSearch }) {
  const username = getDataLocalStorage("username");

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
        <img src="../../public/images/profile.png" alt="profile" />
        <div>
          <p>{username}</p>
          <p>مدیر</p>
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
