import React from "react";
import styles from "./styles/campaigns.module.css";

const Campaigns = (props) => {
  const disabledClass = props.isActivated === false ? styles.disabled : "";
  return (
    <React.Fragment>
      <div className={disabledClass}>
        <div
          className={`m-4 p-0 ${styles.campaignContainer}`}
          onClick={() => props.handleClick(props.id)}
        >
          <div className={`row ${styles.allContent}`}>
            <div className={`col-5 ${styles.imageContainer}`}>
              <div className={styles.imgCentre}>
                <img
                  className={` ${styles.image}`}
                  src={props.image}
                  alt={props.title}
                />
              </div>
            </div>

            <div className={`col-7 ${styles.campaignContent}`}>
              <div className={styles.title}>
                <p>{props.title}</p>
              </div>
              <div className={styles.description}>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.bottomSection}>
              <div className={`col-7 ${styles.contentBottomSection}`}>
                <div className="row">
                  <div className={`col-7 ${styles.requiredAmount}`}>
                    <b>Required Amount:</b>
                    <p>
                      <i className="fa fa-inr" aria-hidden="true"></i>{" "}
                      {props.requiredAmount}
                    </p>
                  </div>
                  <div className={`col-5  ${styles.DonateNow}`}>
                    <p className={styles.DonateNow_p}>
                      Donate Now{" "}
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Campaigns;
