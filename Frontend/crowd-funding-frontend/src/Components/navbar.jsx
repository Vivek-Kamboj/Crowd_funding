import React from "react";
import { Link } from "react-router-dom";
import styles from "./style/navbar.module.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link className={styles.navLink} to="/">
            LandingPage
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/admin/login">
            loginPage
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/contact-us">
            contact-us
          </Link>
        </li>
        <li>
          <Link className={(styles.right, styles.navLink)} to="/about-us">
            about-us
          </Link>
        </li>
      </ul>

      <Link to="/campaign/vvgu">EachCampaignPage</Link>
    </React.Fragment>
  );
};

export default NavBar;
