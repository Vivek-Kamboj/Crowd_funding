import React from "react";
// import { Link } from "react-router-dom";
import logo from "./assets/RotaractIcon.png";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`mb-0 p-4 ${styles.footer}`}>
      <div class="row">
        <div className={`col-12 col-sm-6 col-md-4 ${styles.left}`}>
          <img className={`${styles.logo}`} src={logo} alt="ROTORACT LOGO" />
          <br />
          <p className={`${styles.caption}`}>
            Rotaract Club <br /> IIITM Gwalior
          </p>
        </div>
        <div className={`col-12 col-sm-6 col-md-4 ${styles.middle}`}>
          <p>Follow us on</p>
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
          <br />
          <div className={`${styles.links}`}>
            <a className={`${styles.link}`} href="/about-us">
              About
            </a>
            <a className={`${styles.link}`} href="/contact-us">
              Contact Us
            </a>
            <a
              className={`${styles.link}`}
              href="https://www.iiitm.ac.in/index.php/en/"
              target="_blank"
              rel="noreferrer"
            >
              Institute
            </a>
          </div>
        </div>
        <div className={`col-12 col-sm-12 col-md-4 ${styles.right}`}>
          <p className={`${styles.names}`}>
            <span style={{ fontWeight: "bolder" }}>Developed By : </span>
            <br />
            <a
              className={`${styles.name}`}
              href="https://in.linkedin.com/in/swatik-paul-1218b3136"
              target="_blank"
              rel="noreferrer"
            >
              Swatik Paul
            </a>
            <br />
            <a
              className={`${styles.name}`}
              href="https://www.linkedin.com/in/vivekkamboj1/"
              target="_blank"
              rel="noreferrer"
            >
              Vivek Kamboj
            </a>
            <br />
            <br />
            <span style={{ fontWeight: "bolder" }}>Designed By : </span>
            <br />
            <a
              className={`${styles.name}`}
              href="https://in.linkedin.com/in/manish-mavi-05"
              target="_blank"
              rel="noreferrer"
            >
              Manish Mavi
            </a>
          </p>
          <p>
            For any queries, reach out to us at email :
            <br />
            <b>rotoract@iiitm.ac.in</b>
          </p>
        </div>
      </div>

      <div className={`${styles.footerBottom}`}>
        <hr className={`${styles.line}`} />
        <p style={{ textAlign: "center" }}>
          Copyright &copy; 2021 ROTORACT CLUB IIITM. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
