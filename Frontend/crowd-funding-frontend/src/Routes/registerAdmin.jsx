import React, { useState } from "react";
import Form from "../Components/reuseableAdminForm";
import NavBar from "../Components/navbar_notLanding";
import { register, isAuthorised } from "../services/auth";

const RegisterAdmin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (!isAuthorised()) {
    window.location = "/page-not-found";
    return null;
  }
  const handleSubmit = (p) => {
    p.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    register(email, password);
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
        title="Register Admin"
        handleSubmit={handleSubmit}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
      />
    </React.Fragment>
  );
};

export default RegisterAdmin;
