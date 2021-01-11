import React from "react";
import jwtDecode from "jwt-decode";
import NavBar from "../Components/navbar_notLanding";
import { logout, isAuthorised } from "../services/auth";

const AdminDashboard = (p) => {
  // if (!localStorage.getItem("token")) {
  //   p.history.replace("/page-not-found");
  //   return null;
  // }

  if (!isAuthorised()) {
    window.location = "/page-not-found";
    return null;
  }
  let email = jwtDecode(localStorage.getItem("token")).email;
  let id = jwtDecode(localStorage.getItem("token")).foo;
  return (
    <React.Fragment>
      <NavBar />
      <div className="col-md-10 m-auto border" style={{ textAlign: "center" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbU49DD_iYcjSUEXG-Oy7POjJzaMn1GYEZg&usqp=CAU"
          alt="userIcon"
        />
        <h1>AdminDashboard</h1>
        <p>Id: {id}</p>
        <p>Email: {email}</p>
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
      </div>
    </React.Fragment>
  );
};

export default AdminDashboard;
