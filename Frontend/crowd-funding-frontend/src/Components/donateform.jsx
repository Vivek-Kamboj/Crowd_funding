import React from "react";
import config from "../config.js";

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
            required={true}
            value={props.amount}
            onChange={props.onAmountChange}
          />
        </div>

        <button type="submit" className="btn btn-success col-12">
          Donate Now {">"}{" "}
        </button>
      </form>
    </React.Fragment>
  );
};

export default DonateForm;
