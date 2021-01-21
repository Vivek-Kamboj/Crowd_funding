import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactusForm = () => {
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async (p) => {
    p.preventDefault();
    const sendUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdMXyH7E5OuwAabQz_HyCLo8UUiT_RVCav3jg5Vt49JT0GuzA/formResponse";
    const cors = "https://cors-anywhere.herokuapp.com/";

    // axios.post(x, { "entry.1743311847": email, "entry.2014806996": message });
    await axios({
      url: `${cors}${sendUrl}`,
      data: { "entry.1743311847": email, "entry.2014806996": message },
      method: "POST",
      responseType: "json",
    });
    console.log("entry.1743311847", email, "entry.2014806996", message);
    toast.success("Send");
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
            type="text"
            name="entry.1743311847"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter your Email here..."
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            name="entry.2014806996"
            type="textarea"
            className="form-control"
            placeholder="Enter message here..."
            style={{ minHeight: "80px" }}
            onChange={handleMessageChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success p-2">
          Send <i className="fa fa-paper-plane"></i>
        </button>
      </form>
    </React.Fragment>
  );
};

export default ContactusForm;
