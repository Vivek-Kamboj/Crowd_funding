import React from "react";
import styles from "./styles/popUp.module.css";

const PopUp = (props) => {
  const handleClick = () => {
    props.toggle();
  };
  const send_to = "http://localhost:4000/api/donate/" + props.id + "/payment";

  return (
    <React.Fragment>
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <span className={styles.close} onClick={handleClick}>
            &times;
          </span>
          <form method="POST" action={send_to}>
            <div className="form-group">
              <label htmlFor="Name">Enter Name</label>
              <input
                type="text"
                className="form-control"
                id="Name"
                name="name"
                aria-describedby="nameHelp"
                placeholder="Enter Name"
              />
              <small id="nameHelp" className="form-text text-muted">
                We'll never share your name with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="Amount">Enter Amount in Rs.</label>
              <input
                type="number"
                className="form-control"
                id="Amount"
                name="amount"
                placeholder="Amount"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PopUp;
