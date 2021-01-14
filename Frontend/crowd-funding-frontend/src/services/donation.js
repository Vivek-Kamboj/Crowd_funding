import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.js";

axios.defaults.headers.common["authorization"] =
  "Bearer " + localStorage.getItem("token");

export const getDonationData = async (id) => {
  try {
    const x = await axios.get(config.donationData(id));
    return x;
  } catch (error) {
    toast.error("Something went wrong!");
    console.log(error);
  }
};
