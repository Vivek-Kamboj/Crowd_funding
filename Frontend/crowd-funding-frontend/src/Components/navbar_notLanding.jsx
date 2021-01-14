import React from "react";
import Navbar from "./navbar";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className={styles.bodyPadding}></div>
      <Navbar navBackground={styles.scrolled} />
    </React.Fragment>
  );
};

export default NavBar;
