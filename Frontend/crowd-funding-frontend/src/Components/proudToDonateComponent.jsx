import React, { useEffect, useState } from "react";
import slide1 from "./assets/proudToDonate1.jpg";
import slide2 from "./assets/proudToDonate2.jpg";
import slide3 from "./assets/proudToDonate3.jpg";
import styles from "./styles/proudToDonate.module.css";

const ProudToDonate = () => {
  const x = [".myactive", ".mynone"];
  const [proprety, setProperty] = useState(x);
  const [index, setIndex] = useState(0);
  let n = 3;
  const setImage = () => {
    let i = index;
    var current = [...proprety];

    current[i] = ".mynone";
    i = (i + 1) % n;

    current[i] = ".myactive";
    setProperty(current);
    setIndex(i);
  };
  useEffect(() => {
    const timer = setTimeout(setImage, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <React.Fragment>
      <div className={`col-11 m-auto ${styles.container}`}>
        {/* <h1 className={styles.header}>Proud to donate</h1> */}
        <img
          src={slide1}
          alt="ProudToDonate1"
          className={
            proprety[0] === ".myactive" ? styles.myactive : styles.mynone
          }
        />
        <img
          src={slide2}
          alt="ProudToDonate2"
          className={
            proprety[1] === ".myactive" ? styles.myactive : styles.mynone
          }
        />
        <img
          src={slide3}
          alt="ProudToDonate3"
          className={
            proprety[2] === ".myactive" ? styles.myactive : styles.mynone
          }
        />
        <div className={`${styles.caption}`}>
          <p> Proud to Donate</p>
        </div>
        <div className={`${styles.text}`}>
          <p>
            Remember that the happiest people are not those getting more, but
            those giving more
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProudToDonate;
