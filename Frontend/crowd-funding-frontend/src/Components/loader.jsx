import React from "react";

const Loader = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="spinner-border m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loader;
