import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import NotFound from "../Components/assets/404.jpg";
import styles from "../Components/styles/pageNotFound.module.css";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>Page Not Found</h1>
        <p className={styles.content}>
          When wealth is lost, nothing is lost; when health is lost, something
          is lost; when character is lost, all is lost. <br /> --Billy Graham
          <br />
          <img className={styles.image} src={NotFound} alt="PageNotFound" />
          <br />
          Please contact us for any issue : <Link to="/contact-us">here</Link>
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default PageNotFound;
