import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NavBar from "../Components/navbar_notLanding";
import ProgressBar from "../Components/progressBar";
import Donated from "../Components/donors";
import Share from "../Components/shareComponent";
import DonateForm from "../Components/donateform";
import { getCampaignData, deleteCampaign } from "../services/campaign";
import { isAuthorised } from "../services/auth";
import styles from "../Components/styles/campaign.module.css";

const Campaign = (props) => {
  const [campaign, setCampaign] = useState({});

  const [amount, setAmount] = useState("");

  function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n > 0;
  }

  const handleAmountChange = (p) => {
    if (p.target.value === "" || isNormalInteger(p.target.value))
      setAmount(p.target.value);
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

      <div className="col-12 col-md-10 m-auto py-2">
        {/* {isAuthorised() && (
          <div className="bg-light border p-2">
            <span className="m-2">
              IsActivated: {campaign.isActivated === true ? "true" : "false"}
            </span>
            <span className="m-2">
              IsHidden: {campaign.isHidden === true ? "true" : "false"}
            </span>
          </div>
        )} */}
        {!campaign.isActivated && (
          <div className="alert alert-warning" role="alert">
            <b>Warning:</b> Campaign is deactivated. Please contact to admin for
            more information.
          </div>
        )}
        <h2 className={styles.title}>{campaign.title}</h2>
        {isAuthorised() && (
          <>
            <button onClick={handleEdit} className="btn btn-warning m-2">
              EDIT
            </button>

            <button onClick={handledelete} className="btn btn-danger m-2">
              Delete
            </button>
          </>
        )}

        <div className="row m-2">
          <div className="col-lg-7 col-md-6">
            <img
              className={styles.image}
              src={campaign.imageUrl}
              alt={campaign.title}
            />
          </div>
          <div className=" col-lg-5 col-md-6 p-2">
            <ProgressBar
              fundRequired={campaign.required}
              fundRaised={campaign.raised}
              id={props.match.params.id}
              amount={amount}
              onAmountChange={handleAmountChange}
              isActivated={campaign.isActivated}
            />
            <p>
              Number of people donated:- <b>{campaign.donorsNum}</b>
            </p>
            <div className="border">
              <Share
                url={window.location.href}
                title={campaign.title}
                description={campaign.description}
              />
            </div>
          </div>
        </div>
        <p className={styles.description}>{campaign.description}</p>
        <DonateForm
          id={props.match.params.id}
          amount={amount}
          onAmountChange={handleAmountChange}
          isActivated={campaign.isActivated}
        />
        <hr />
        <Donated data={campaign.donors} />
      </div>
    </React.Fragment>
  );
};

export default Campaign;
