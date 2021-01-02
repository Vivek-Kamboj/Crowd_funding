import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NavBar from "../Components/navbar_notLanding";
import ProgressBar from "../Components/progressBar";
import Donated from "../Components/donors";
import Share from "../Components/shareComponent";
import PopUp from "../Components/popup";
import { getCampaignData, deleteCampaign } from "../services/campaign";
import styles from "../Components/styles/campaign.module.css";

const Campaign = (props) => {
  const [campaign, setCampaign] = useState({});
  const [popUp, setPopUp] = useState(false);
  const togglePop = () => {
    setPopUp(!popUp);
  };
  useEffect(() => {
    async function getData() {
      const { data, err } = await getCampaignData(props.match.params.id);

      if (err === undefined) {
        setCampaign(data);
      } else {
        console.log(err);
        toast.error("Campaign not found");
        props.history.replace("/page-not-found");
      }
    }
    getData();
    return null;
  }, [props.history, props.match.params.id]);

  const handleDonateClick = () => {
    setPopUp(true);
  };
  const handleEdit = () => {
    props.history.push(`/admin/campaign/${props.match.params.id}/edit`);
  };
  const handledelete = () => {
    async function DeleteCampaign() {
      await deleteCampaign(props);
    }
    DeleteCampaign();
  };
  return (
    <React.Fragment>
      <NavBar />
      {popUp && <PopUp id={props.match.params.id} toggle={togglePop} />}
      <div className="col-12 col-md-10 m-auto py-2">
        {localStorage.getItem("token") && (
          <div className="bg-light border p-2">
            <span className="m-2">
              IsActivated: {campaign.isActivated === true ? "true" : "false"}
            </span>
            <span className="m-2">
              IsHidden: {campaign.isHidden === true ? "true" : "false"}
            </span>
          </div>
        )}
        <h2>{campaign.title}</h2>
        {localStorage.getItem("token") && (
          <React.Fragment>
            <button onClick={handleEdit} className="btn btn-warning m-2">
              EDIT
            </button>

            <button onClick={handledelete} className="btn btn-danger m-2">
              Delete
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
              Number of people donated:- <b>{campaign.donorsNum}</b>
            </p>
            <div className="border">
              <Share url={window.location.href} title={campaign.title} />
            </div>
          </div>
        </div>
        <p>{campaign.description}</p>
        <button onClick={handleDonateClick} className="btn btn-success col-12">
          Donate Now {">"}{" "}
        </button>
        <hr />
        {localStorage.getItem("token") && <Donated data={campaign.donors} />}
      </div>
    </React.Fragment>
  );
};

export default Campaign;
