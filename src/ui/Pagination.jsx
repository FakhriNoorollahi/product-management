import React from "react";
import { createPaginationArray } from "../utils/helper";

function Pagination({ page: currentPage, setPage, totalPage }) {
  const numberOfPage = createPaginationArray(totalPage);

  return (
    <div className="paginationContainer">
      {numberOfPage.map((page) => (
        <button
          key={page}
          className={`paginationBtns ${
            currentPage === page && "paginationBtnsActive"
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
