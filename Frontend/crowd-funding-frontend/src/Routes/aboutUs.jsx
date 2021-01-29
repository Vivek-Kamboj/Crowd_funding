import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>ABOUT US</h1>
        <p className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at!
          <br />
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- IIITM Block View"
          />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at!Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vero consequatur ea quia inventore excepturi
          officiis deserunt sequi, esse nobis laudantium tempora aut, animi
          praesentium id! Necessitatibus laborum vitae vero at!
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at!Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vero consequatur ea quia inventore excepturi
          officiis deserunt sequi, esse nobis laudantium tempora aut, animi
          praesentium id! Necessitatibus laborum vitae vero at!
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at!
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
