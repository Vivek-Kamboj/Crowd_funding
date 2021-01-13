import React, { useEffect, useState } from "react";
import { getDonationData } from "../services/donation";
import NavBar from "../Components/navbar_notLanding";

const DonationSuccess = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function callback() {
      const res = await getDonationData(props.match.params.id);
      if (res) setData(res.data);
    }
    callback();
    return null;
  }, [props.match.params.id]);
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <h1>Thank you for donating with transaction id:{data.transactionID}</h1>
        <p>amount:{data.amount}</p>
        <p>campaign:{data.campaign}</p>
        <p>
          transactionComplete:
          {data.transactionComplete === true ? "true" : "false"}
        </p>
        <p>Go back to Campaign with id: Wait</p>
      </div>
    </React.Fragment>
  );
};

export default DonationSuccess;
