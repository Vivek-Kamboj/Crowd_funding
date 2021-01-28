import React, { useState } from "react";
import Form from "../Components/reuseableAdminForm";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import { register, isAuthorised } from "../services/auth";
import { toast } from "react-toastify";

const RegisterAdmin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (!isAuthorised()) {
    props.history.replace("/page-not-found");
    toast.error("Not authorised");
    return null;
  }
  const handleSubmit = (p) => {
    p.preventDefault();
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
      <ScrollToTop />
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
