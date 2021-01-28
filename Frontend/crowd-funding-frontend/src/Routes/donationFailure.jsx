import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import styles from "../Components/styles/donationStatus.module.css";

const DonationFailure = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <div className={styles.fail}>
          <i class="fa fa-window-close fa-5x" aria-hidden="true"></i>
        </div>
        <h3>Your donation process failed, please try again...</h3>
        <p>
          Please contact us for any issue : <Link to="/contact-us">here</Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default DonationFailure;
