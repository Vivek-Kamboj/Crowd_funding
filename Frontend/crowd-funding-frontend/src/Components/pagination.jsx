import React, { useRef } from "react";
import _ from "lodash";
import styles from "./styles/paginate.module.css";

const Pagination = (props) => {
  const ref = useRef();

  // const handleScroll = (direction) => {
  //   if (direction === "left") {
  //     if (ref) {
  //       ref.current.scrollLeft -= 40;
  //     }
  //   } else {
  //     if (ref) {
  //       ref.current.scrollLeft += 40;
  //     }
  //   }
  // };
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <React.Fragment>
      <div className={styles.paginateSection}>
        <nav className={styles.nav}>
          <ul className={`pagination ${styles.ul}`} ref={ref}>
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
        </nav>
        {/* {pagesCount > 6 && (
          <div className={styles.scroll}>
            <button
              className={`btn btn-success m-2 ${styles.active}`}
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
        )} */}
      </div>
    </React.Fragment>
  );
};

export default Pagination;
