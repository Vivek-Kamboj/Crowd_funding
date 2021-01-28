import React from "react";
import nobleCause from "./assets/nobleCause.jpg";
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
        <img className={styles.image} src={nobleCause} alt="noble cause" />
      </div>
    </React.Fragment>
  );
};

export default NobelCauseComponent;
