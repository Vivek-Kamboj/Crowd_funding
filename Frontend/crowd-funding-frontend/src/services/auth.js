import axios from "axios";
import jwtDecode from "jwt-decode";
import config from "../config.js";
import { toast } from "react-toastify";

axios.defaults.headers.common["authorization"] =
  "Bearer " + localStorage.getItem("token");

export const register = async (email, password) => {
  try {
    const x = await axios.post(config.registerAdminUrl(), {
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
  let err = undefined;
  try {
    const x = await axios.post(config.loginAdminUrl(), {
      email: email,
      password: password,
    });
    console.log("login_api", x.data);
    console.log("Status:", x.data.status);
    localStorage.setItem("token", x.data.jwt);
    console.log("LoggedIn");
  } catch (error) {
    console.log(error);
    err = error;
  }
  return err;
};

export const logout = async () => {
  localStorage.removeItem("token");
};

export const isAuthorised = () => {
  if (!localStorage.getItem("token")) return false;
  let exp = jwtDecode(localStorage.getItem("token")).exp;
  if (!exp || exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
    return false;
  }
  return true;
};
