const backendURL = "https://backend-liart.vercel.app/";
// const backendURL = "http://localhost:4000/";

export const getAllCampaignsUrl = () => {
  return backendURL + "api/campaign/all";
};

export const getCampaignDataByIdUrl = (id) => {
  return backendURL + "api/campaign/" + id;
};

export const createNewCampaignUrl = () => {
  return backendURL + "api/user/create";
};

export const updateCampaignUrl = (id) => {
  return backendURL + "api/user/" + id + "/update";
};

export const deleteCampaignUrl = (id) => {
  return backendURL + "api/user/" + id + "/delete";
};

export const registerAdminUrl = () => {
  return backendURL + "api/user/addAdmin";
};

export const loginAdminUrl = () => {
  return backendURL + "api/user/login";
};

export const donateTo = (id) => {
  return backendURL + "api/donate/" + id + "/payment";
};

export const donationData = (id) => {
  return backendURL + "api/donation/success/" + id;
};

const toExport = {
  getAllCampaignsUrl,
  getCampaignDataByIdUrl,
  createNewCampaignUrl,
  updateCampaignUrl,
  deleteCampaignUrl,
  registerAdminUrl,
  loginAdminUrl,
  donateTo,
  donationData,
};

export default toExport;
