import React, { useState } from "react";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";
import Form from "../Components/reuseableAdminForm";
import { login } from "../services/auth";

const LoginAdmin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (p) => {
    p.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    login("x");
    props.history.push("/admin/dashboard");
  };
  const handleEmailChange = (p) => {
    setEmail(p.target.value);
  };
  const handlePasswordChange = (p) => {
    setPassword(p.target.value);
  };
  return (
    <React.Fragment>
      <NavBar />
      <Form
        title="Login Admin"
        handleSubmit={handleSubmit}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
      />
      <Footer />
    </React.Fragment>
  );
};

export default LoginAdmin;
