import React, { useRef } from "react";
import styles from "./styles/onGoingCampaigns.module.css";
import Campaign from "./everyOngoingCampaigns";

const OnGoingCampaigns = (props) => {
  const Ref = useRef();

  const handleScroll = (direction) => {
    if (direction === "left") {
      if (Ref) {
        Ref.current.scrollLeft -= 200;
      }
    } else {
      if (Ref) {
        Ref.current.scrollLeft += 200;
      }
    }
  };

  return (
    <React.Fragment>
      <section className="col-12">
        <div className="row">
          <h1 className={`col-7 ${styles.title}`}>On Going Campaigns</h1>
          <div className={`col-5 ${styles.directions}`}>
            <span>
              <button
                className="btn btn-primary m-1"
                onClick={() => handleScroll("left")}
              >
                {"<"}
              </button>
            </span>
            <span>
              <button
                className="btn btn-primary m-1"
                onClick={() => handleScroll("right")}
              >
                {">"}
              </button>
            </span>
          </div>
        </div>
        <div className={styles.campaigns} ref={Ref}>
          {props.data.map((d) => (
            <div
              key={d._id}
              className={`col-sm-8 col-11 ${styles.eachCampaign}`}
            >
              <Campaign
                id={d._id}
                handleClick={props.handleClick}
                title={d.title}
                description={d.description}
                image={d.imageUrl}
                requiredAmount={d.required}
              />
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default OnGoingCampaigns;
