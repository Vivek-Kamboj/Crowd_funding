import React from "react";

const Campaigns = (props) => {
  return (
    <React.Fragment>
      <div className="col-6 border m-5 p-5">
        <img src={props.image} alt={props.title} />
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <p>Required Amount:</p>
        <p>{props.requiredAmount}</p>
        <button className="btn btn-primary">Donate Now {">"} </button>
      </div>
    </React.Fragment>
  );
};

export default Campaigns;
