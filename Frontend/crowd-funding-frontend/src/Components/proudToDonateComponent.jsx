import React, { useEffect, useState } from "react";
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
        <h1 className={styles.header}>Proud to donate</h1>
        <img
          src="https://images.unsplash.com/photo-1505155485412-30b3a45080ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80s"
          alt="ProudToDonate"
          className={
            proprety[0] === ".myactive" ? styles.myactive : styles.mynone
          }
        />
        <img
          src="https://images.unsplash.com/photo-1530490125459-847a6d437825?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=763&q=80"
          alt="ProudToDonate2"
          className={
            proprety[1] === ".myactive" ? styles.myactive : styles.mynone
          }
        />
        <img
          src="https://images.unsplash.com/photo-1550328434-90bb77cf8b92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          alt="ProudToDonate3"
          className={
            proprety[2] === ".myactive" ? styles.myactive : styles.mynone
          }
        />
      </div>
    </React.Fragment>
  );
};

export default ProudToDonate;
