import React from "react";
import styles from "./styles/image_landing.module.css";

const ImageLanding = () => {
  const divStyle = {
    height: "800px",
    backgroundSize: "cover",
  };
  return (
    <React.Fragment>
      <div className={styles.backgroundImage} style={divStyle}>
        <button className={`btn btn-success ${styles.donateBtn}`}>
          Donate
        </button>
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
    </React.Fragment>
  );
};

export default ImageLanding;
