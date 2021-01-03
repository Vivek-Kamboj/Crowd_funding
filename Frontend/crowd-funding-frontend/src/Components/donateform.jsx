import React from "react";

const DonateForm = (props) => {
  const send_to = "http://localhost:4000/api/donate/" + props.id + "/payment";

  return (
    <React.Fragment>
      <form method="POST" action={send_to}>
        <div className="form-group">
          <label htmlFor="Name">Enter Name</label>
          <input
            type="text"
            className="form-control"
            id="Name"
            name="name"
            aria-describedby="nameHelp"
            placeholder="Enter Name"
          />
          <small id="nameHelp" className="form-text text-muted">
            We'll never share your name with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="Amount">Enter Amount in Rs.</label>
          <input
            type="number"
            className="form-control"
            id="Amount"
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
