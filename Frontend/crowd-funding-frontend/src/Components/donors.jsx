import React from "react";

const Donated = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>Donated People List</h1>
        <ul className="list-group">
          {props.data &&
            (props.data.length === 0 ? (
              <li className="list-group-item">No one donated yet...</li>
            ) : (
              props.data.map((d) => (
                <li className="list-group-item" key={d.transactionID}>
                  transactionID:{d.transactionID} <br /> Rupees: Rs
                  {d.donationAmount}
                </li>
              ))
            ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Donated;
