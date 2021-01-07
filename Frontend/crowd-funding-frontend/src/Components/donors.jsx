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
              <>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-4 text-center">
                      <b>TransactionId</b>
                    </div>
                    <div className="col-4 text-center">
                      <b>Amount</b>
                    </div>
                    <div className="col-4 text-center">
                      <b>Status</b>
                    </div>
                  </div>
                </li>
                {props.data.map((d) => (
                  <li className="list-group-item" key={d.transactionID}>
                    <div className="row">
                      <div className="col-4 text-center">{d.transactionID}</div>
                      <div className="col-4 text-center">
                        Rs. {d.donationAmount}
                      </div>
                      <div className="col-4 text-center">Successful</div>
                    </div>
                  </li>
                ))}
              </>
            ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Donated;
