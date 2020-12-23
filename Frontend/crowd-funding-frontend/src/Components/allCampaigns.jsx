import React, { useEffect, useState } from "react";
import Campaign from "./everyOngoingCampaigns";
import { getAllCampaigns } from "../services/campaign";

const AllCampaigns = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data, err } = await getAllCampaigns();
      if (err !== "") setData(data);
    }
    getData();
  }, []);
  const handleClick = (p) => {
    let url = "/campaign/" + p;
    props.history.push(url);
  };
  return (
    <React.Fragment>
      <h1>All Campaigns</h1>
      <div className="row">
        {data.map((d) => (
          <div key={d.id} className={`col-sm-6 col-11 }`}>
            <Campaign
              id={d.id}
              handleClick={handleClick}
              title={d.title}
              description={d.description}
              image={d.image}
              requiredAmount={d.requiredAmount}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default AllCampaigns;
