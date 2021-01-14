import React from "react";
import _ from "lodash";
import styles from "./styles/paginate.module.css";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <React.Fragment>
      <nav className={styles.nav}>
        <ul className={`pagination ${styles.ul}`}>
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
