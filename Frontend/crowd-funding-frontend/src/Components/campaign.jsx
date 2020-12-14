import React, { useEffect, useState } from "react";

const Campaign = (p) => {
  const [state, setState] = useState(0);

  useEffect(() => setState(50), []);
  return (
    <React.Fragment>
      <div>Campaign id: {p.match.params.id}</div>

      <div className="col-8 p-2 m-5 border bg-warning">
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
            <p>#####</p>
          </div>
          <div className="col-4 text-right">
            <p>Fund Raised:</p>
            <p>#####</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Campaign;
