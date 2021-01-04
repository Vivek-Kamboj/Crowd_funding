import React from "react";

const DonateForm = (props) => {
  const send_to = "http://localhost:4000/api/donate/" + props.id + "/payment";

  return (
    <React.Fragment>
      <form method="POST" action={send_to}>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter Name"
          defaultValue="Anonymous"
          style={{ display: "none" }}
        />
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="amount"
            placeholder="Enter Amount"
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
