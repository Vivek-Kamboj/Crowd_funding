import React from "react";
import NavBar from "../Components/navbar_notLanding";

const DonationSuccess = (props) => {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <h1>
          Thank you for donating with transaction id:{props.match.params.did}
        </h1>
        <p>Go back to Campaign with id:{props.match.params.cid}</p>
      </div>
    </React.Fragment>
  );
};

export default DonationSuccess;
