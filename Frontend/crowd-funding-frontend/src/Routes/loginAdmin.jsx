import React, { useState } from "react";
import { toast } from "react-toastify";
import Form from "../Components/reuseableAdminForm";
import { login } from "../services/auth";

const LoginAdmin = (p) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (localStorage.getItem("token")) {
    p.history.replace("/admin/dashboard");
    toast.success("Alredy Logged In....");
    return null;
  }

  const handleSubmit = (p) => {
    p.preventDefault();
    // console.log("Email:", email);
    // console.log("Password:", password);
    login(email, password).then(() => {
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
