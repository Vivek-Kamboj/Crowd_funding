import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.js";

export const getAllQueries = async () => {
  let dataToSend = [],
    err = undefined;
  try {
    const data = await axios.get(config.getAllQueriesUrl());
    dataToSend = data.data;
  } catch (error) {
    err = error;
  }
  return { data: dataToSend, err: err };
};

export const createQuery = async (data) => {
  try {
    await axios.post(config.getCreateQueryUrl(), data);
    toast.success("Message send!");
    return true;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong!");
  }
  return false;
};

export const deleteQuery = async (id) => {
  try {
    await axios.delete(config.querydeleteUrl(id));
    toast.success("Deleted!");
    return true;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong!");
  }
  return false;
};
