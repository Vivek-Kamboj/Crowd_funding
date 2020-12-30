import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(styles.notscrolled);

  useEffect(() => {
    let listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 80) {
        if (navBackground !== styles.scrolled) {
          setNavBackground(styles.scrolled);
        }
      } else {
        if (navBackground !== styles.notscrolled) {
          setNavBackground(styles.notscrolled);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [navBackground]);

  return (
    <React.Fragment>
      <nav className={`sticky-top ${styles.navbar}`}>
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
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
