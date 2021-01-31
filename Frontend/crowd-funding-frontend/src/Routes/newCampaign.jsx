import React, { useState } from "react";
import Form from "../Components/reuseableCampaignForm";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import { newCampaign } from "../services/campaign";
import { isAuthorised } from "../services/auth";
import { toast } from "react-toastify";

const NewCampaign = (props) => {
  const [campaignName, setCampaignName] = useState("");
  const [campaignSubTitle, setCampaignSubtitle] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");
  const [isActivated, setActivated] = useState(true);
  const [isHidden, setHidden] = useState(false);

  if (!isAuthorised()) {
    props.history.replace("/page-not-found");
    toast.error("Not authorised");
    return null;
  }

  const data = {
    title: campaignName,
    subTitle: campaignSubTitle,
    description: campaignDescription,
    required: amount,
    imageUrl: image,
    isActivated: isActivated,
    isHidden: isHidden,
  };
  const handleSubmit = (p) => {
    p.preventDefault();
    async function createCampaign(data) {
      await newCampaign(data, props);
    }
    createCampaign(data);
  };
  const handleCampaignNameChange = (p) => {
    setCampaignName(p.target.value);
  };
  const handleCampaignSubTitleChange = (p) => {
    setCampaignSubtitle(p.target.value);
  };
  const handleCampaignDescriptionChange = (p) => {
    setCampaignDescription(p.target.value);
  };
  const handleAmountChange = (p) => {
    setAmount(p.target.value);
  };
  const handleImageChange = (p) => {
    setImage(p.target.value);
  };
  const handleHiddenBtn = (p) => {
    setHidden(p.target.checked);
  };
  const handleActivateBtn = (p) => {
    setActivated(p.target.checked);
  };
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <Form
        title="New Campaign"
        data={data}
        handleSubmit={handleSubmit}
        handleCampaignNameChange={handleCampaignNameChange}
        handleCampaignSubTitleChange={handleCampaignSubTitleChange}
        handleCampaignDescriptionChange={handleCampaignDescriptionChange}
        handleAmountChange={handleAmountChange}
        handleImageChange={handleImageChange}
        handleHiddenBtn={handleHiddenBtn}
        handleActivateBtn={handleActivateBtn}
      />
    </React.Fragment>
  );
};

export default NewCampaign;
