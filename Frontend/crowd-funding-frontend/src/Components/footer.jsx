import React from "react";
// import { Link } from "react-router-dom";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`mb-0 p-4 ${styles.footer}`}>
      <div class="row col-12">
        <div className={`col-md-8 ${styles.about}`}>
          <h2 className={`${styles.header1}`}>ROTORACT CLUB</h2>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
            <br />
            <br />
            For any queries, reach out to us at email :{" "}
            <b>rotoract@iiitm.ac.in</b>
          </p>
        </div>

        <div className={`col-md-4 ${styles.links}`}>
          <h4 className={`${styles.header2}`}>QUICK LINKS</h4>
          <p className={`${styles.linkList}`}>
            <a className={`${styles.link}`} href="/about-us">
              About Us
            </a>
          </p>
          <p className={`${styles.linkList}`}>
            <a className={`${styles.link}`} href="/contact-us">
              Contact Us
            </a>
          </p>
          <p className={`${styles.linkList}`}>
            <a className={`${styles.link}`} href="/all-campaigns">
              Browse Campaigns
            </a>
          </p>
        </div>
      </div>

      <div className={`${styles.footerBottom}`}>
        <hr className={`${styles.line}`} />
        <div class="row col-12">
          <div className={`col-md-8 ${styles.copyrightText}`}>
            <p>
              Copyright &copy; 2021 All Rights Reserved by ROTORACT CLUB @
              IIITM.
            </p>
          </div>

          <div className={`col-md-4 ${styles.icons}`}>
            <a
              className={`${styles.facebook}`}
              href="https://www.facebook.com/rotaractiiitm/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-facebook"></i>
            </a>
            <a
              className={`${styles.linkedin}`}
              href="https://in.linkedin.com/company/rotaract-club-abv-iiitm"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
