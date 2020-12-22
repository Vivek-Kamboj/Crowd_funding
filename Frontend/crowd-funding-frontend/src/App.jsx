import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Components/navbar";
import Footer from "./Components/footer";
import LandingPage from "./Components/landingPage";
import Campaign from "./Components/campaign";
import LoginAdmin from "./Components/loginAdmin";
import RegisterAdmin from "./Components/registerAdmin";
import AdminDashboard from "./Components/adminDashboard";
import AboutUs from "./Components/aboutUs";
import ContactUs from "./Components/contactUs";
import PageNotFound from "./Components/PageNotFound";
import NewCampaign from "./Components/newCampaign";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/campaign/:id" component={Campaign} />
        <Route path="/admin/login" component={LoginAdmin} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin/new" component={RegisterAdmin} />
        <Route path="/admin/campaign/new" component={NewCampaign} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/page-not-found" exact component={PageNotFound} />
        <Route path="/" exact component={LandingPage} />
        <Redirect to="/page-not-found" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
