import React from "react";
import styles from "./styles/nobelCauseComponent.module.css";

const BottomLandingPage = () => {
  const x = { width: "100%", margin: "10px" };
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
          style={x}
          src="https://summitlife.org/wp-content/uploads/2017/08/Helping-the-Poor-Website.jpg"
          alt="noble cause"
        />
      </div>
    </React.Fragment>
  );
};

export default BottomLandingPage;
