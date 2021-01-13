import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(styles.notscrolled);

  useEffect(() => {
    let listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
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
      <Navbar navBackground={navBackground} />
    </React.Fragment>
  );
};

export default NavBar;
