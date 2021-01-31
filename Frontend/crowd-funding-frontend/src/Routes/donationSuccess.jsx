import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/navbar_notLanding";
import Loader from "../Components/loaderFullPage";
import ScrollToTop from "../Components/scrollToTop";
import { getDonationData } from "../services/donation";
import styles from "../Components/styles/donationStatus.module.css";

const DonationSuccess = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function callback() {
      const { err, data: res } = await getDonationData(props.match.params.id);
      setLoading(false);
      if (err !== undefined) {
        props.history.replace("/page-not-found");
      }
      if (res) setData(res.data);
    }
    callback();
    return null;
  }, [props.match.params.id, props.history]);
  const url = "/campaign/" + data.campaign;

  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      {loading && <Loader />}
      <div className={styles.container}>
        <div className={styles.success}>
          <i className="fa fa-check-circle-o fa-5x" aria-hidden="true"></i>
        </div>
        <h3>Thank you for donating in such a noble cause.</h3>
        <p>
          Your donation of{" "}
          <b>
            <i className="fa fa-inr" aria-hidden="true"></i>
            {data.amount}
          </b>{" "}
          with transaction ID: <b>{data.transactionID}</b> is{" "}
          {data.transactionComplete === false ? (
            <b className={styles.fail}>failed</b>
          ) : (
            <b className={styles.success}>successful</b>
          )}
          .
        </p>
        <p>
          Please contact us for any issue : <Link to="/contact-us">here</Link>
        </p>

        <p>
          <Link to={url}>Go back to the Campaign.</Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default DonationSuccess;
