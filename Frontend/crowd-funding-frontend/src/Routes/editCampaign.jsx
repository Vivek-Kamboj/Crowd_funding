import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Form from "../Components/reuseableCampaignForm";
import NavBar from "../Components/navbar_notLanding";
import Loader from "../Components/loaderFullPage";
import ScrollToTop from "../Components/scrollToTop";
import { updateCampaign, getCampaignData } from "../services/campaign";
import { isAuthorised } from "../services/auth";

const NewCampaign = (props) => {
  const [campaignName, setCampaignName] = useState("");
  const [campaignSubTitle, setCampaignSubtitle] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");
  const [isActivated, setActivated] = useState(true);
  const [isHidden, setHidden] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const { data, err } = await getCampaignData(props.match.params.id);

      if (err === undefined) {
        setLoading(false);
        setCampaignName(data.title);
        setCampaignSubtitle(data.subTitle);
        setCampaignDescription(data.description);
        setAmount(data.required);
        setImage(data.imageUrl);
        setActivated(data.isActivated);
        setHidden(data.isHidden);
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
    async function editCampaign(data) {
      await updateCampaign(data, props);
    }
    editCampaign(data);
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
      {loading && <Loader />}
      <Form
        title={`Edit Campaign "${props.match.params.id}"`}
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
