import React, { useState } from "react";
import { createQuery } from "../services/query";
import styles from "./styles/queryForm.module.css";

const ContactusForm = () => {
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async (p) => {
    p.preventDefault();
    let res = await createQuery({ email, message });
    if (res) {
      setEmail("");
      setmessage("");
    }
  };
  const handleEmailChange = (p) => {
    setEmail(p.target.value);
  };
  const handleMessageChange = (p) => {
    setmessage(p.target.value);
  };
  return (
    <React.Fragment>
      <form target="_self" onSubmit={handleSubmit} action="" autoComplete="off">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter your email ID here..."
            onChange={handleEmailChange}
            value={email}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            type="textarea"
            className="form-control"
            placeholder="Enter message here..."
            style={{ minHeight: "80px" }}
            onChange={handleMessageChange}
            value={message}
            required
          />
        </div>

        <button
          type="submit"
          className={`btn btn-success p-2 ${styles.button}`}
        >
          Send <i className="fa fa-paper-plane"></i>
        </button>
      </form>
    </React.Fragment>
  );
};

export default ContactusForm;
