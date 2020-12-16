import React from "react";

const Form = (props) => {
  return (
    <React.Fragment>
      <div className="col-8 mx-auto my-2 border p-2">
        <h1>{props.title}</h1>
        <form onSubmit={props.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Campaign Name" className="form-label">
              Campaign Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Campaign Name"
              aria-describedby="emailHelp"
              onChange={props.handleCampaignNameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Image" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="Image"
              aria-describedby="emailHelp"
              onChange={props.handleImageChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Campaign Description" className="form-label">
              Campaign Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="Campaign Description"
              aria-describedby="emailHelp"
              onChange={props.handleCampaignDescriptionChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="Amount"
              aria-describedby="emailHelp"
              onChange={props.handleAmountChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
