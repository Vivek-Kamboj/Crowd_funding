import axios from "axios";
import config from "../config.json";
import { toast } from "react-toastify";

axios.defaults.headers.common["authorization"] =
  "Bearer " + localStorage.getItem("token");

export const register = async (email, password) => {
  try {
    const x = await axios.post(config.registerAdminUrl, {
      email: email,
      password: password,
    });
    console.log("register_api", x);
    toast.success("Registered");
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const x = await axios.post(config.loginAdminUrl, {
      email: email,
      password: password,
    });
    console.log("login_api", x.data);
    console.log("Status:", x.data.status);
    localStorage.setItem("token", x.data.jwt);
    console.log("LoggedIn");
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  localStorage.removeItem("token");
};
