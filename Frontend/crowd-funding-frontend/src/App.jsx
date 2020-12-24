import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./Routes/landingPage";
import Campaign from "./Routes/campaign";
import LoginAdmin from "./Routes/loginAdmin";
import RegisterAdmin from "./Routes/registerAdmin";
import AdminDashboard from "./Routes/adminDashboard";
import AboutUs from "./Routes/aboutUs";
import ContactUs from "./Routes/contactUs";
import PageNotFound from "./Routes/PageNotFound";
import NewCampaign from "./Routes/newCampaign";
import AllCampaigns from "./Routes/allCampaigns";
import NavBar from "./Components/navbar";
import Footer from "./Components/footer";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/all-campaigns" component={AllCampaigns} />
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
