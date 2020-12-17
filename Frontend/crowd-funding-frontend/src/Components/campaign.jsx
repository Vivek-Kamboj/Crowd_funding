import React from "react";
import ProgressBar from "./progressBar";

const Campaign = (p) => {
  let image =
    "data:image/jpeg;base64,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";
  let title = "This is title",
    description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, corporis dolores expedita, maiores dolorum ad dignissimos fugit voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, corporis dolores expedita, maiores dolorum ad dignissimos fugit voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, corporis dolores expedita, maiores dolorum ad dignissimos fugit voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, corporis dolores expedita, maiores dolorum ad dignissimos fugit voluptatem blanditiis, deleniti at? Eligendi assumenda eius illo accusantium possimus ducimus, nam vero.",
    fundRequired = 1000,
    fundRaised = 500;
  const handleDonateClick = () => {
    alert("Donate Button Clicked!");
  };
  const handleEdit = () => {
    alert("Edit Button Clicked!");
  };
  const handleHide = () => {
    alert("Hide Button Clicked!");
  };
  return (
    <React.Fragment>
      <div>Campaign id: {p.match.params.id}</div>
      <div className="row m-2">
        <div className="col-md-6">
          <img src={image} alt={title} />
          <h5>{title}</h5>
        </div>
        <div className="col-md-6 p-5">
          <ProgressBar
            fundRequired={fundRequired}
            fundRaised={fundRaised}
            handleDonateClick={handleDonateClick}
          />
        </div>
      </div>
      <p>{description}</p>

      <button onClick={handleEdit} className="btn btn-danger m-2">
        EDIT{" "}
      </button>
      <button onClick={handleHide} className="btn btn-danger">
        HIDE{" "}
      </button>
    </React.Fragment>
  );
};

export default Campaign;
