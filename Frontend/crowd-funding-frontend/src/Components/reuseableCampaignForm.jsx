import React from "react";
import styles from "./styles/campaignForm.module.css";

const Form = (props) => {
  return (
    <React.Fragment>
      <div className={`col-8 mx-auto my-2 border p-2 ${styles.form}`}>
        <h3 className={`${styles.title}`}>{props.title}</h3>
        <form onSubmit={props.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Campaign Name" className="form-label">
              Campaign Name
            </label>
            <input
              type="text"
              value={props.data.title}
              className="form-control"
              id="Campaign Name"
              aria-describedby="emailHelp"
              onChange={props.handleCampaignNameChange}
              placeholder="Enter Campaign Name"
              required={true}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Campaign Sub Heading" className="form-label">
              Campaign Sub Heading
            </label>
            <input
              type="text"
              value={props.data.subTitle}
              className="form-control"
              id="Campaign Sub Heading"
              aria-describedby="emailHelp"
              onChange={props.handleCampaignSubTitleChange}
              placeholder="Enter Campaign Sub Heading"
              required={true}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Image" className="form-label">
              Image
            </label>
            <input
              type="text"
              value={props.data.imageUrl}
              className="form-control"
              id="Image"
              aria-describedby="emailHelp"
              onChange={props.handleImageChange}
              placeholder="Enter Image URL"
              required={true}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Campaign Description" className="form-label">
              Campaign Description
            </label>
            <textarea
              type="text"
              value={props.data.description}
              className="form-control"
              id="Campaign Description"
              aria-describedby="emailHelp"
              onChange={props.handleCampaignDescriptionChange}
              placeholder="Enter description..."
              required={true}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              value={props.data.required}
              className="form-control"
              id="Amount"
              aria-describedby="emailHelp"
              onChange={props.handleAmountChange}
              placeholder="Enter amount to be raised (in Rs)"
              required={true}
            />
          </div>

          {/* <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="Hide"
              checked={props.data.isHidden}
              onChange={props.handleHiddenBtn}
            />
            <label className="form-check-label" htmlFor="Hide">
              Hide
            </label>
          </div> */}

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="Activate"
              checked={props.data.isActivated}
              onChange={props.handleActivateBtn}
            />
            <label className="form-check-label" htmlFor="Activate">
              Activate
            </label>
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
