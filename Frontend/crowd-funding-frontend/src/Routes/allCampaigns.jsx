import React, { useEffect, useState } from "react";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";
import Campaign from "../Components/everyOngoingCampaigns";
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
      <NavBar />
      <h1>All Campaigns</h1>
      <div className="row">
        {data.map((d) => (
          <div key={d.id} className={`col-sm-6 col-11 }`}>
            <Campaign
              id={d._id}
              handleClick={handleClick}
              title={d.title}
              description={d.description}
              image={d.imageUrl}
              requiredAmount={d.required}
            />
          </div>
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AllCampaigns;
