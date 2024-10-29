import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Products.module.css";
import { getDataLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { useCheckToken } from "../../hooks/checkToken";

function ProductSearch({ search, setSearch }) {
  const username = getDataLocalStorage("username");
  const navigate = useNavigate();

  return (
    <div className={styles.searchContainer}>
      <CiSearch />
      <input
        type="text"
        placeholder="جستجو کالا"
        value={search}
        onChange={(e) =>
          useCheckToken(() => setSearch(e.target.value), navigate)
        }
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
