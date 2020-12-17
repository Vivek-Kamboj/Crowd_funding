import React, { useState } from "react";
import Form from "./reuseableCampaignForm";

const NewCampaign = () => {
  const [campaignName, setCampaignName] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (p) => {
    p.preventDefault();
    console.log("campaignName:", campaignName);
    console.log("campaignDescription:", campaignDescription);
    console.log("amount:", amount);
    console.log("image:", image);
    alert("form submit click, plz see console the data");
    // props.history.push("/");
  };
  const handleCampaignNameChange = (p) => {
    setCampaignName(p.target.value);
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
  return (
    <React.Fragment>
      <Form
        title="New Campaign"
        handleSubmit={handleSubmit}
        handleCampaignNameChange={handleCampaignNameChange}
        handleCampaignDescriptionChange={handleCampaignDescriptionChange}
        handleAmountChange={handleAmountChange}
        handleImageChange={handleImageChange}
      />
    </React.Fragment>
  );
};

export default NewCampaign;
