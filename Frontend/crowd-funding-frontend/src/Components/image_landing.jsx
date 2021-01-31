import React from "react";
import { Link } from "react-scroll";
import styles from "./styles/image_landing.module.css";

const ImageLanding = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backgroundImage}>
        <div className={styles.title}>
          <p className={styles.text}> ROTARACT IIITM</p>
          <p className={styles.header}> You Bestow, We Deliver</p>
        </div>
        <Link
          to="Donate"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className={`btn btn-success p-3 ${styles.donateBtn}`}>
            DONATE NOW
          </button>
        </Link>
      </div>

      {/* <img
        style={{
          width: "100%",
          position: "relative",
          top: "0px",
        }}
        src="https://images.unsplash.com/photo-1547722700-57de0f73d3a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9vcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt="LandingImage"
      /> */}
      {/* <div id="Donate">hello</div> */}
    </React.Fragment>
  );
};

export default ImageLanding;
