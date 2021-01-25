import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

const Navbar = (props) => {
  const [navBackground, setNavBackGround] = useState(styles.notscrolled);
  const handleBtnClick = () => {
    if (navBackground === styles.scrolled) setNavBackGround(styles.notScrolled);
    else setNavBackGround(styles.scrolled);
  };
  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-md sticky-top ${styles.navbar} ${props.navBackground} ${navBackground}`}
      >
        <li className={styles.title}>
          <Link className={styles.brand} to="/">
            <img src="/navImage.png" alt="title" />
          </Link>
        </li>

        <button
          onClick={handleBtnClick}
          style={{ color: "inherit" }}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i
            className="fa fa-bars p-1"
            style={{ color: "inherit" }}
            aria-hidden="true"
          ></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          {/* <Link to="/admin/login">loginPage</Link> */}
          <ul className={`navbar-nav   `} style={{ margin: "0 0 0 auto" }}>
            <li style={{ float: "right" }}>
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li style={{ float: "right" }}>
              <Link to="/contact-us">CONTACT US</Link>
            </li>
            {localStorage.getItem("token") && (
              <li style={{ float: "right" }}>
                <Link to="/admin/dashboard">Admin-Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

/* <div className={styles.bodyPadding}></div> */

/* <nav className={`sticky-top ${styles.navbar}`}>
  <ul className={navBackground}>
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
</nav> */
