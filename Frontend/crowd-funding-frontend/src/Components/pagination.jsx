import React, { useRef } from "react";
import _ from "lodash";
import styles from "./styles/paginate.module.css";

const Pagination = (props) => {
  const ref = useRef();

  const handleScroll = (direction) => {
    if (direction === "left") {
      if (ref) {
        ref.current.scrollLeft -= 40;
      }
    } else {
      if (ref) {
        ref.current.scrollLeft += 40;
      }
    }
  };
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <React.Fragment>
      <nav className={styles.nav}>
        <ul
          className={`pagination ${styles.ul}`}
          ref={ref}
          style={{ width: "200px", overflow: "scroll" }}
        >
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <button
                className={
                  "page-link " +
                  (page === currentPage
                    ? `${styles.active}`
                    : `${styles.inactive}`)
                }
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
        {pagesCount > 6 && (
          <div style={{ margin: "auto", textAlign: "center" }}>
            <button
              className={`btn btn-success ${styles.active}`}
              onClick={() => handleScroll("left")}
            >
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </button>

            <button
              className={`btn btn-success ${styles.active}`}
              onClick={() => handleScroll("right")}
            >
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        )}
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
