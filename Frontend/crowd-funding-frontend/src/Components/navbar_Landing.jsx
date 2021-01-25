import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(styles.notscrolled);

  useEffect(() => {
    const changeColor = () => {
      var scrolled = window.scrollY;
      if (scrolled >= 80) {
        if (navBackground !== styles.scrolled) {
          setNavBackground(styles.scrolled);
        }
      } else {
        if (navBackground !== styles.notscrolled) {
          setNavBackground(styles.notscrolled);
        }
      }
      return null;
    };

    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  });

  return (
    <React.Fragment>
      <Navbar navBackground={navBackground} />
    </React.Fragment>
  );
};

export default NavBar;
