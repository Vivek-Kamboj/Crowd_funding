import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NavBar from "../Components/navbar_notLanding";
import Campaign from "../Components/everyOngoingCampaigns";
import { getAllCampaigns } from "../services/campaign";

const AllCampaigns = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data, err } = await getAllCampaigns();
      if (err === undefined) {
        setData(data);
      } else {
        console.log(err);
        toast.error("Something went wrong");
      }
    }
    getData();
    return null;
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
          <div key={d._id} className={`col-sm-6 col-11 }`}>
            <Campaign
              id={d._id}
              handleClick={handleClick}
              title={d.title}
              description={d.description}
              image={d.imageUrl}
              requiredAmount={d.required}
              isActivated={d.isActivated}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default AllCampaigns;
