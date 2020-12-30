import React from "react";

const Donated = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>Donated People List</h1>
        <ul className="list-group">
          {props.data.map((d) => (
            <li className="list-group-item" key={d.t_id}>
              T_id:{d.t_id} name:{d.name} time:{d.time} Rupees:Rs{d.amount}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Donated;
