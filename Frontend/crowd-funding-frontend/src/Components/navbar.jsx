import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <Link to="/">LandingPage</Link>
      <Link to="/admin/login">loginPage</Link>
      <Link to="/about-us">about-us</Link>
      <Link to="/contact-us">contact-us</Link>

      <Link to="/campaign/vvgu">EachCampaignPage</Link>
    </React.Fragment>
  );
};

export default NavBar;
