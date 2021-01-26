import React from "react";
import styles from "./styles/nobelCauseComponent.module.css";

const NobelCauseComponent = () => {
  return (
    <React.Fragment>
      <div className={`col-12 m-auto ${styles.container}`}>
        <h1 className={styles.header}>Become a part of noble cause</h1>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam
          ullam saepe, dolores, sed nihil facere in fugiat, non repellendus
          architecto voluptates a dolore odit quibusdam recusandae tempore iusto
          voluptatem.
        </p>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1573919639277-5d481e497833?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
          alt="noble cause"
        />
      </div>
    </React.Fragment>
  );
};

export default NobelCauseComponent;
