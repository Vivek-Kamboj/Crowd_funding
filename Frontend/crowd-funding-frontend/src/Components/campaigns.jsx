import React from "react";

const Campaigns = (props) => {
  return (
    <React.Fragment>
      <div className="col-10 border p-2 m-2">
        <div className="row">
          <div className="col-4">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="col-8">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <hr />
            <div className="row col-12">
              <div className="col-8">
                <p>Required Amount:</p>
                <p>{props.requiredAmount}</p>
              </div>
              <div className="col-4">
                <button className="btn btn-primary">Donate Now {">"} </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Campaigns;
