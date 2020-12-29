import axios from "axios";
import config from "../config.json";

export const login = async (email, password) => {
  try {
    const x = await axios.post(config.loginAdminUrl, {
      email: email,
      password: password,
    });
    console.log("login_api", x.data.jwt);
    localStorage.setItem("token", x.data.jwt);
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  localStorage.removeItem("token");
};

export const register = async (email, password) => {
  try {
    const x = await axios.post(config.registerAdminUrl, {
      email: email,
      password: password,
    });
    console.log("register_api", x);
  } catch (error) {
    console.log(error);
  }
};
