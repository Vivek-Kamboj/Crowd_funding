import React, { useState } from "react";
import Pagination from "./pagination";
import styles from "./styles/donors.module.css";
import { paginate } from "../utills/paginate";

const Donated = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!props.data || props.data.length === 0) {
    return null;
  }
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const pageSize = 15;
  let data = [...props.data];
  data = data.reverse();
  const donors = paginate(data, currentPage, pageSize);

  const hide = (S) => {
    var i,
      text = "";
    for (i = 0; i < S.length; i++) {
      if (i > 3 && i < S.length - 3) text = text + "X";
      else text = text + S[i];
    }
    return text;
  };

  return (
    <React.Fragment>
      <h3 className={styles.title}>List of donations:</h3>
      <p className={styles.num}> -Number of people donated: {props.num}</p>

      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-12 col-sm-6 text-center">
              <b>TransactionId</b>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <b>Amount</b>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <b>Status</b>
            </div>
          </div>
        </li>
        {donors.map((d) => (
          <li className="list-group-item" key={d._id}>
            <div className="row">
              <div className="col-12 col-sm-6 text-center">
                <p style={{ overflow: "auto" }}>{hide(d.transactionID)}</p>
              </div>
              <div className="col-6 col-sm-3 text-center">
                <i>Rs. {d.donationAmount}</i>
              </div>
              <div className={`col-6 col-sm-3 text-center ${styles.success}`}>
                Successful
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        itemsCount={props.data.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
};

export default Donated;
