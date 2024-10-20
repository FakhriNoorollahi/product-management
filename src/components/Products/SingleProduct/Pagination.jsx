import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styles from "../Products.module.css";

function Pagination({ page: currentPage, setPage, totalPage }) {
  const arr = [];
  for (let i = 1; i <= totalPage; i++) {
    arr.push(i);
  }

  return (
    <div className={styles.paginationContainer}>
      {arr.map((page) => (
        <button
          key={page}
          className={`${styles.paginationBtns} ${
            currentPage === page && styles.paginationBtnsActive
          }`}
          onClick={() => setPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
