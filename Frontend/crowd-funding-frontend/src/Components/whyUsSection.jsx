import React from "react";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  const url =
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why us ?</h1>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            aut perspiciatis laborum repellat esse hic nihil a placeat accusamus
            fugit. Iusto earum ea esse beatae quae soluta vero cupiditate
            commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati aut perspiciatis laborum repellat esse hic nihil a placeat
            accusamus fugit. Iusto earum ea esse beatae quae soluta vero
            cupiditate commodi.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati aut perspiciatis laborum repellat esse
            hic nihil a placeat accusamus fugit. Iusto earum ea esse beatae quae
            soluta vero cupiditate commodi.
          </p>
        </div>
        <div className="col-md-4">
          <img className={styles.image} src={url} alt="ChildImage" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
