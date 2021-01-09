import React from "react";
import config from "../config.js";
import styles from "./styles/donateform.module.css";

const DonateForm = (props) => {
  const send_to = config.donateTo(props.id);

  return (
    <React.Fragment>
      <form method="POST" action={send_to}>
        <div className="form-group">
          <input
            className="form-control"
            name="amount"
            placeholder="Enter Amount"
            disabled={!props.isActivated}
            required={true}
            value={props.amount}
            onChange={props.onAmountChange}
          />
        </div>

        <button
          type="submit"
          disabled={!props.isActivated}
          className={`btn col-12 ${
            props.isActivated === false
              ? `btn-secondary ${styles.disabled}`
              : "btn-success"
          }`}
        >
          Donate Now {">"}{" "}
        </button>
      </form>
    </React.Fragment>
  );
};

export default DonateForm;
