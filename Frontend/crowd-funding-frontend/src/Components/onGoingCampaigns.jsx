import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Loader from "./loader";
import styles from "./styles/onGoingCampaigns.module.css";
import Campaign from "./everyOngoingCampaigns";

const OnGoingCampaigns = (props) => {
  const Ref = useRef();

  const handleScroll = (direction) => {
    if (direction === "left") {
      if (Ref) {
        Ref.current.scrollLeft -= 325;
      }
    } else {
      if (Ref) {
        Ref.current.scrollLeft += 325;
      }
    }
  };

  return (
    <React.Fragment>
      <section id="Donate" className={` ${styles.container}`}>
        <div className="row">
          <h1 className={`col-sm-7 ${styles.title}`}>Ongoing Campaigns</h1>
          <div className={`col-sm-5 ${styles.directions}`}>
            <span>
              <button
                className={`btn btn-success m-1 ${styles.button}`}
                onClick={() => handleScroll("left")}
              >
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </button>
            </span>
            <span>
              <button
                className={`btn btn-success m-1 ${styles.button}`}
                onClick={() => handleScroll("right")}
              >
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </button>
            </span>
          </div>
        </div>
        {props.loading && <Loader />}
        <div className={styles.campaigns} ref={Ref}>
          {props.data.map((d) => (
            <div
              key={d._id}
              className={`col-sm-8 col-12 p-0 ${styles.eachCampaign}`}
            >
              <Campaign
                id={d._id}
                handleClick={props.handleClick}
                title={d.title}
                description={d.description}
                image={d.imageUrl}
                requiredAmount={d.required}
                isActivated={d.isActivated}
              />
            </div>
          ))}
        </div>
        <div className="col-12 text-center">
          <Link to="/all-campaigns">
            <button className={`btn btn-success ${styles.showAll}`}>
              See More{" "}
            </button>
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OnGoingCampaigns;
