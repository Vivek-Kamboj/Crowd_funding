import React, { useState } from "react";
import { toast } from "react-toastify";
import Form from "../Components/reuseableAdminForm";
import NavBar from "../Components/navbar_notLanding";
import { login, isAuthorised } from "../services/auth";

const LoginAdmin = (p) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (isAuthorised()) {
    p.history.replace("/admin/dashboard");
    toast.success("Alredy Logged In....");
    return null;
  }

  const handleSubmit = async (p) => {
    p.preventDefault();
    await login(email, password).then(() => {
      window.location = "/admin/dashboard";
    });
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
    </React.Fragment>
  );
};

export default LoginAdmin;
