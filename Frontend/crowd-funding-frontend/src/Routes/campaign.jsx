import React, { useEffect, useState } from "react";
import ProgressBar from "../Components/progressBar";
import { getCampaignData } from "../services/campaign";
import styles from "../Components/styles/campaign.module.css";

const Campaign = (p) => {
  const [campaign, setCampaign] = useState({});
  useEffect(() => {
    async function getData() {
      const { data, err } = await getCampaignData(p.match.params.id);
      if (err !== "") setCampaign(data);
    }
    getData();
  }, [p.match.params.id]);

  const handleDonateClick = () => {
    alert("Donate Button Clicked!");
  };
  const handleEdit = () => {
    alert("Edit Button Clicked!");
  };
  const handleHide = () => {
    alert("Hide Button Clicked!");
  };

  return (
    <React.Fragment>
      <div className="col-12 col-md-10 m-auto py-2">
        <div>Campaign id: {p.match.params.id}</div>
        <h2>{campaign.title}</h2>
        {localStorage.getItem("token") && (
          <React.Fragment>
            <button onClick={handleEdit} className="btn btn-danger m-2">
              EDIT
            </button>
            <button onClick={handleHide} className="btn btn-danger">
              HIDE
            </button>
          </React.Fragment>
        )}
        <div className="row m-2">
          <div className="col-lg-7 col-md-6">
            <img
              className={styles.image}
              src={campaign.imageUrl}
              alt={campaign.title}
            />
          </div>
          <div className=" col-lg-5 col-md-6 p-5">
            <ProgressBar
              fundRequired={campaign.required}
              fundRaised={campaign.raised}
              handleDonateClick={handleDonateClick}
            />
            <p>
              Number of people donated:-{" "}
              <b>0{campaign.numberOfPeopleDonated}</b>
            </p>
          </div>
        </div>
        <p>{campaign.description}</p>
        <button onClick={handleDonateClick} className="btn btn-success col-12">
          Donate Now {">"}{" "}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Campaign;
