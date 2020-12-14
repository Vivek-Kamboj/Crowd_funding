import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Components/navbar";
import Footer from "./Components/footer";
import LandingPage from "./Components/LandingPage";
import Campaign from "./Components/campaign";
import LoginAdmin from "./Components/LoginAdmin";
import AboutUs from "./Components/aboutUs";
import ContactUs from "./Components/contactUs";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/campaign/:id" component={Campaign} />
        <Route path="/admin/login" component={LoginAdmin} />
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
