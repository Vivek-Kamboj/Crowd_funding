import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Form from "../Components/reuseableCampaignForm";
import { updateCampaign, getCampaignData } from "../services/campaign";

const NewCampaign = (props) => {
  const [campaignName, setCampaignName] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");
  const [isActivated, setActivated] = useState(true);
  const [isHidden, setHidden] = useState(false);
  useEffect(() => {
    async function getData() {
      const { data, err } = await getCampaignData(props.match.params.id);

      if (err === undefined) {
        setCampaignName(data.title);
        setCampaignDescription(data.description);
        setAmount(data.required);
        setImage(data.imageUrl);
        setActivated(data.isActivated);
        setHidden(data.isHidden);
      } else {
        console.log(err);
        toast.error("Campaign not found");
        props.history.replace("/page-not-found");
      }
    }
    getData();
    return null;
  }, [props.history, props.match.params.id]);
  if (!localStorage.getItem("token")) {
    props.history.replace("/page-not-found");
    return null;
  }

  const data = {
    title: campaignName,
    description: campaignDescription,
    required: amount,
    imageUrl: image,
    isActivated: isActivated,
    isHidden: isHidden,
  };
  const handleSubmit = (p) => {
    p.preventDefault();
    async function editCampaign(data) {
      await updateCampaign(data, props);
    }
    editCampaign(data);
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
  const handleHiddenBtn = (p) => {
    setHidden(p.target.checked);
  };
  const handleActivateBtn = (p) => {
    setActivated(p.target.checked);
  };
  return (
    <React.Fragment>
      <Form
        title={`Edit Campaign "${props.match.params.id}"`}
        data={data}
        handleSubmit={handleSubmit}
        handleCampaignNameChange={handleCampaignNameChange}
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
