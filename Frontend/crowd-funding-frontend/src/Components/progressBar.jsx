import React, { useState, useEffect } from "react";
import DonateForm from "./donateform";

const percentCompleted = (Raised, Required) => {
  return (Raised * 100) / Required;
};

const ProgressBar = (props) => {
  const [state, setState] = useState(0);
  useEffect(
    () =>
      setState(() => percentCompleted(props.fundRaised, props.fundRequired)),
    [props.fundRaised, props.fundRequired]
  );

  return (
    <React.Fragment>
      <div
        className={`p-2 border ${
          props.isActivated === false ? "bg-light" : "bg-warning"
        } `}
      >
        <div className="progress ">
          <div
            className={`progress-bar progress-bar-animated ${
              props.isActivated === false ? "bg-secondary" : "bg-danger"
            }`}
            role="progressbar"
            aria-valuenow={state}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${state}%` }}
          ></div>
        </div>

        <div className="row justify-content-between">
          <div className="col-4">
            <p>Goal:</p>
            <p>
              Rs.
              {props.fundRequired}
            </p>
          </div>
          <div className="col-4 text-right">
            <p>Raised:</p>
            <p>
              Rs.
              {props.fundRaised}
            </p>
          </div>
        </div>

        <DonateForm
          id={props.id}
          amount={props.amount}
          onAmountChange={props.onAmountChange}
          isActivated={props.isActivated}
        />
      </div>
    </React.Fragment>
  );
};

export default ProgressBar;
