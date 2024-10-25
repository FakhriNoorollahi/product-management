import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Products.module.css";
import {
  getDataLocalStorage,
  removeDataLocalStorage,
} from "../../utils/localStorage";
import { getCookie, removeCooki } from "../../utils/cookie";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function ProductSearch({ search, setSearch }) {
  const username = getDataLocalStorage("username");
  const token = getCookie();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);

  const handlerLogout = () => {
    if (!token) {
      navigate("/auth/login");
      setRefresh(refresh + 1);
      return;
    }

    removeCooki();
    removeDataLocalStorage("username");
    setRefresh(refresh + 1);
  };

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
        {token ? (
          <img src="../../public/images/profile.png" alt="profile" />
        ) : (
          <img
            src="../../public/images/no-img.jpg"
            className={styles.informatinImg}
          />
        )}
        <div>
          <p>{!token ? "بدون نام" : username || "بدون نام"}</p>
          <div className={styles.logOutBtn}>
            <p>{!token ? "کاربر" : "مدیر"}</p>
            <button onClick={handlerLogout}>
              {token ? (
                <BiLogOutCircle className={styles.logoutIcon} />
              ) : (
                <BiLogInCircle className={styles.loginIcon} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
