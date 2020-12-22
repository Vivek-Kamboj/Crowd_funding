import axios from "axios";

export const login = async (data) => {
  try {
    const x = await axios.post(
      "http://jsonplaceholder.typicode.com/posts",
      data
    );
    console.log("login_api", x);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (data) => {
  try {
    const x = await axios.post(
      "http://jsonplaceholder.typicode.com/posts",
      data
    );
    console.log("register_api", x);
  } catch (error) {
    console.log(error);
  }
};
