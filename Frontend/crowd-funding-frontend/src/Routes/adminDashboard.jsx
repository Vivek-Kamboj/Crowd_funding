import React from "react";
// import jwtDecode from "jwt-decode";
import NavBar from "../Components/navbar_notLanding";
import { logout, isAuthorised } from "../services/auth";

const AdminDashboard = (p) => {
  // if (!localStorage.getItem("token")) {
  //   p.history.replace("/page-not-found");
  //   return null;
  // }
  // console.log(jwtDecode(localStorage.getItem("token")));
  // console.log(jwtDecode(localStorage.getItem("token")).iat * 1000, Date.now());
  if (!isAuthorised()) {
    window.location = "/page-not-found";
    return null;
  }
  return (
    <React.Fragment>
      <NavBar />
      <div className="col-12 col-md-10">
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
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
