import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NavBar from "../Components/navbar_notLanding";
import ProgressBar from "../Components/progressBar";
import Donated from "../Components/donors";
import Share from "../Components/shareComponent";
import PopUp from "../Components/popup";
import { getCampaignData } from "../services/campaign";
import styles from "../Components/styles/campaign.module.css";

const data = [
  {
    t_id: "abc1",
    amount: 100,
    name: "Ramesh",
    time: "32/12/20",
  },
  {
    t_id: "abc2",
    amount: 100,
    name: "Samesh",
    time: "32/12/20",
  },
  {
    t_id: "abc3",
    amount: 100,
    name: "Darmesh",
    time: "32/12/20",
  },
  {
    t_id: "abc4",
    amount: 100,
    name: "papnesh",
    time: "32/12/20",
  },
  {
    t_id: "abc5",
    amount: 100,
    name: "katappa",
    time: "32/12/20",
  },
];

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

  return (
    <React.Fragment>
      <NavBar />
      {popUp && <PopUp toggle={togglePop} />}
      <div className="col-12 col-md-10 m-auto py-2">
        <div>Campaign id: {props.match.params.id}</div>
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

            <button
              onClick={() => alert("To delete")}
              className="btn btn-danger m-2"
            >
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
        {localStorage.getItem("token") && <Donated data={data} />}
      </div>
    </React.Fragment>
  );
};

export default Campaign;
