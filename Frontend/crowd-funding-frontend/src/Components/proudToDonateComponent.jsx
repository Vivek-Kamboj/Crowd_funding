import React, { useEffect, useState } from "react";
import styles from "./styles/proudToDonate.module.css";

const ProudToDonate = () => {
  const x = [".myactive", ".mynone"];
  const [proprety, setProperty] = useState(x);
  const [index, setIndex] = useState(0);
  let n = 2;
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
    setTimeout(setImage, 3000);
  });

  return (
    <React.Fragment>
      <div className="col-11 m-auto">
        <h1>ProudToDonate</h1>
        <img
          src="https://thumbs.dreamstime.com/b/poor-indian-beggar-family-street-leh-ladakh-india-june-unidentified-children-early-ages-often-brought-to-70999174.jpg"
          alt="ProudToDonate"
          className={
            proprety[0] === ".myactive" ? styles.myactive : styles.mynone
          }
        />
        <img
          src="https://static1.bigstockphoto.com/3/6/9/large1500/96302606.jpg"
          alt="ProudToDonate2"
          className={
            proprety[1] === ".myactive" ? styles.myactive : styles.mynone
          }
        />
      </div>
    </React.Fragment>
  );
};

export default ProudToDonate;
