import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NavBar from "../Components/navbar_notLanding";
import ProgressBar from "../Components/progressBar";
import Donated from "../Components/donors";
import FloatBtn from "../Components/campaignFloatingBtns";
import Loader from "../Components/loaderFullPage";
import ScrollToTop from "../Components/scrollToTop";
import { isNormalInteger } from "../utills/math";
import { getCampaignData, deleteCampaign } from "../services/campaign";
import { isAuthorised } from "../services/auth";
import styles from "../Components/styles/campaign.module.css";

const Campaign = (props) => {
  const [campaign, setCampaign] = useState({});
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState("");

  const handleAmountChange = (p) => {
    if (p.target.value === "" || isNormalInteger(p.target.value))
      setAmount(p.target.value);
  };

  useEffect(() => {
    async function getData() {
      const { data, err } = await getCampaignData(props.match.params.id);

      if (err === undefined) {
        setCampaign(data);
        setLoading(false);
      } else {
        props.history.replace("/page-not-found");
        if (err.response && err.response.data) {
          toast.error(err.response.data.message);
        } else toast.error("Something went wrong");
        return null;
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
      <ScrollToTop />
      {loading && <Loader />}
      <FloatBtn campaign={campaign} />
      <div className={`col-md-10 col-11 m-auto py-2 ${styles.container}`}>
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
        {campaign.isActivated === false && (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <b>Warning:</b> Campaign is deactivated. Please contact to admin for
            more information.
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

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

        <div className="row ">
          <div className="col-lg-6 col-md-5">
            <div className={styles.img}>
              <img
                className={styles.image}
                src={campaign.imageUrl}
                alt={campaign.title}
              />
            </div>
          </div>
          <div
            id="DonateForm"
            className={` col-lg-6 col-md-7 p-2 m-auto ${styles.info}`}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>{campaign.title}</h2>
              {campaign.subTitle && (
                <p className={styles.subtitle}>- {campaign.subTitle}</p>
              )}
              {!campaign.subTitle && (
                <div
                  style={{
                    border: "2px solid rgba(21, 215, 180, 1)",
                    width: "100%",
                    backgroundColor: "rgba(21, 215, 180, 1)",
                  }}
                ></div>
              )}
            </div>
            <ProgressBar
              fundRequired={campaign.required}
              fundRaised={campaign.raised}
              id={props.match.params.id}
              amount={amount}
              onAmountChange={handleAmountChange}
              isActivated={campaign.isActivated}
            />
          </div>
        </div>

        <p className={styles.description}>{campaign.description}</p>

        <hr />

        <Donated data={campaign.donors} num={campaign.donorsNum} />
      </div>
    </React.Fragment>
  );
};

export default Campaign;
