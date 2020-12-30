import React from "react";
import { logout } from "../services/auth";

const AdminDashboard = (p) => {
  if (!localStorage.getItem("token")) {
    p.history.replace("/page-not-found");
    return null;
  }
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
        className="btn btn-warning"
        onClick={() => {
          p.history.push("/admin/campaign/new");
        }}
      >
        New Campaign
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          p.history.push("/all-campaigns");
        }}
      >
        All Campaign
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          logout().then(() => {
            window.location = "/";
          });
        }}
      >
        Logout
      </button>
      <h6>Admin say for refrence...</h6>
      <p>
        email:x@iiitm.ac.in <br /> password:1234
      </p>
    </React.Fragment>
  );
};

export default AdminDashboard;
