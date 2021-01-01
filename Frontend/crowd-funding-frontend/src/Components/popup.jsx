import React from "react";
import styles from "./styles/popUp.module.css";

const PopUp = (props) => {
  const handleClick = () => {
    props.toggle();
  };
  return (
    <React.Fragment>
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <span className={styles.close} onClick={handleClick}>
            &times;
          </span>
          <form>
            <div className="form-group">
              <label htmlFor="Name">Enter Name</label>
              <input
                type="text"
                className="form-control"
                id="Name"
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
