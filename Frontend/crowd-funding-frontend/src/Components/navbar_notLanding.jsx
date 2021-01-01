import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className={styles.bodyPadding}>.</div>
      <nav className={`sticky-top ${styles.navbar}`}>
        <ul className={styles.scrolled}>
          <li>
            <Link to="/">LandingPage</Link>
          </li>
          {localStorage.getItem("token") && (
            <li style={{ float: "right" }}>
              <Link to="/admin/dashboard">Admin-Dashboard</Link>
            </li>
          )}

          <li style={{ float: "right" }}>
            <Link to="/contact-us">CONTACT US</Link>
          </li>
          <li style={{ float: "right" }}>
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <Link to="/admin/login">loginPage</Link>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
