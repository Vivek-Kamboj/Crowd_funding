import React, { useState, useEffect } from "react";

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
      <div className="p-2 border bg-warning">
        <div className="progress ">
          <div
            className="progress-bar bg-danger progress-bar-animated"
            role="progressbar"
            aria-valuenow={state}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${state}%` }}
          ></div>
        </div>

        <div className="row justify-content-between">
          <div className="col-4">
            <p>Fund Required:</p>
            <p>
              <img
                src="http://i.stack.imgur.com/nGbfO.png"
                width="8"
                height="10"
                alt="Rupee icon"
              />
              {props.fundRequired}
            </p>
          </div>
          <div className="col-4 text-right">
            <p>Fund Raised:</p>
            <p>
              <img
                src="http://i.stack.imgur.com/nGbfO.png"
                width="8"
                height="10"
                alt="Rupee icon"
              />
              {props.fundRaised}
            </p>
          </div>
        </div>
        <button
          onClick={props.handleDonateClick}
          className="btn btn-success col-12"
        >
          Donate Now {">"}{" "}
        </button>
      </div>
    </React.Fragment>
  );
};

export default ProgressBar;
