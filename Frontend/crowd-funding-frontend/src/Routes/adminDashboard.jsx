import React from "react";
import jwtDecode from "jwt-decode";
import NavBar from "../Components/navbar_notLanding";
import ShowQuery from "../Components/showquery";
import ScrollToTop from "../Components/scrollToTop";
import { logout, isAuthorised } from "../services/auth";
import { toast } from "react-toastify";

const AdminDashboard = (p) => {
  if (!isAuthorised()) {
    p.history.replace("/page-not-found");
    toast.error("Not authorised");
    return null;
  }
  let email = jwtDecode(localStorage.getItem("token")).email;
  // let id = jwtDecode(localStorage.getItem("token")).foo;
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className="col-md-10 m-auto border" style={{ textAlign: "center" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbU49DD_iYcjSUEXG-Oy7POjJzaMn1GYEZg&usqp=CAU"
          alt="userIcon"
        />
        <h1>AdminDashboard</h1>
        <b>{email}</b>
        <hr />
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
        <hr />
        <ShowQuery />
        <br />
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
