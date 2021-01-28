import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
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
          <img className={styles.image} src={ChildImage} alt="HappyKids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
