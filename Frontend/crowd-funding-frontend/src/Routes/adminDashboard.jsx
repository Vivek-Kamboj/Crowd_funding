import React from "react";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";

const AdminDashboard = (p) => {
  return (
    <React.Fragment>
      <NavBar />
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
      <Footer />
    </React.Fragment>
  );
};

export default AdminDashboard;
