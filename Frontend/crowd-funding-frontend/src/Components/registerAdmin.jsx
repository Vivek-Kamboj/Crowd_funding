import React, { useState } from "react";
import Form from "./reuseableAdminForm";

const RegisterAdmin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (p) => {
    p.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
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
      Login Admin
      <div className="p-3 m-3 col-6">
        <Form
          title="Register Admin"
          handleSubmit={handleSubmit}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
        />
      </div>
    </React.Fragment>
  );
};

export default RegisterAdmin;
