import React, { useEffect, useState } from "react";
import ProgressBar from "./progressBar";
import { getCampaignData } from "../services/campaign";

const Campaign = (p) => {
  console.log("props:", p);
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
      <div>Campaign id: {p.match.params.id}</div>
      <div className="row m-2">
        <div className="col-md-6">
          <img src={campaign.image} alt={campaign.title} />
          <h5>{campaign.title}</h5>
        </div>
        <div className="col-md-6 p-5">
          <ProgressBar
            fundRequired={campaign.fundRequired}
            fundRaised={campaign.fundRaised}
            handleDonateClick={handleDonateClick}
          />
          <p>
            Number of people donated:- <b>{campaign.numberOfPeopleDonated}</b>
          </p>
        </div>
      </div>
      <p>{campaign.description}</p>

      <button onClick={handleEdit} className="btn btn-danger m-2">
        EDIT{" "}
      </button>
      <button onClick={handleHide} className="btn btn-danger">
        HIDE{" "}
      </button>
    </React.Fragment>
  );
};

export default Campaign;
