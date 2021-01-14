import React, { useState } from "react";
import Pagination from "./pagination";
import styles from "./styles/donors.module.css";
import { paginate } from "./utills/paginate";

const Donated = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!props.data || props.data.length === 0) {
    return null;
  }
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const pageSize = 5;
  let data = [...props.data];
  data = data.reverse();
  const donors = paginate(data, currentPage, pageSize);

  return (
    <React.Fragment>
      <h3>List of donations:</h3>

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
          <li className="list-group-item" key={d.transactionID}>
            <div className="row">
              <div className="col-12 col-sm-6 text-center">
                {d.transactionID}
              </div>
              <div className="col-6 col-sm-3 text-center">
                <i>Rs. {d.donationAmount}</i>
              </div>
              <div
                className={`col-6 col-sm-3 text-center ${
                  d.transactionStatus === true ? styles.success : styles.fail
                }`}
              >
                {d.transactionStatus === true ? "Successful" : "Unsuccessful"}
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
