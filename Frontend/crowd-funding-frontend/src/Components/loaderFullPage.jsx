import React from "react";
import styles from "./styles/loaderFullPage.module.css";

const LoaderFullPage = () => {
  return (
    <React.Fragment>
      <div className={styles.fullpage}>
        <div className="d-flex justify-content-center">
          <div className="spinner-border m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoaderFullPage;
