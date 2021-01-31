import React from "react";
import styles from "./styles/loginForm.module.css";

const Form = (props) => {
  return (
    <React.Fragment>
      <div className={`col-8 mx-auto my-2 border p-2 ${styles.form}`}>
        <h1 className={`${styles.title}`}>{props.title}</h1>
        <form onSubmit={props.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              onChange={props.handleEmailChange}
              placeholder="Enter e-mail address"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="InputPassword"
              onChange={props.handlePasswordChange}
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className={`btn btn-primary ${styles.btn}`}>
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
