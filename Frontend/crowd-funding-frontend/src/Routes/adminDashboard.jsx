import React from "react";

const AdminDashboard = (p) => {
  return (
    <React.Fragment>
      <div>AdminDashboard</div>
      <button
        className="btn btn-warning m-2"
        onClick={() => {
          p.history.push("/admin/new");
        }}
      >
        New Admin +
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          p.history.push("/admin/campaign/new");
        }}
      >
        New Campaign
      </button>
      <h6>Admin say for refrence...</h6>
      <p>
        email:x@iiitm.ac.in <br /> password:1234
      </p>
    </React.Fragment>
  );
};

export default AdminDashboard;
