import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.js";

axios.defaults.headers.common["authorization"] =
  "Bearer " + localStorage.getItem("token");

export const getDonationData = async (id) => {
  let err = undefined,
    sendItem;
  try {
    sendItem = await axios.get(config.donationData(id));
  } catch (error) {
    toast.error("Something went wrong!");
    console.log(error);
    err = error;
  }
  return { err: err, data: sendItem };
};
