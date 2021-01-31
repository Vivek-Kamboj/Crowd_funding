import React, { useState } from "react";
import { Link } from "react-scroll";
import Share from "./shareComponent";
import DonateIcon from "./assets/donateIcon.png";
import styles from "./styles/floatingBtns.module.css";

import useHover from "../utills/useHover";

const FloatBtn = (props) => {
  let [ref, hovered] = useHover();
  const [showShare, setShowShare] = useState(false);

  const handleClick = () => {
    setShowShare(!showShare);
  };

  return (
    <React.Fragment>
      <div className={`${styles.container} ${styles.ShareIcon}`}>
        <div>
          {showShare && (
            <Share
              url={window.location.href}
              title={props.campaign.title}
              description={props.campaign.description}
            />
          )}

          <div
            className={`${styles.share} ${styles.btn}`}
            onClick={handleClick}
          >
            {!showShare && (
              <i className="fa fa-share-alt" aria-hidden="true"></i>
            )}
            {showShare && <i class="fa fa-times" aria-hidden="true"></i>}
          </div>
        </div>
      </div>

      <div className={`${styles.container} ${styles.DonateIcon}`}>
        <Link
          to="DonateForm"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className={`btn ${styles.btn}`} ref={ref}>
            <div
              style={{ display: "inline-flex" }}
              className={hovered ? styles.show : styles.hide}
            >
              <div className={styles.text}> Donate Now {"> "}</div>
            </div>
            <img className={styles.img} src={DonateIcon} alt="Donate Icon" />
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default FloatBtn;
