import React from "react";
import NavBar from "../Components/navbar_notLanding";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  const url =
    "https://qphs.fs.quoracdn.net/main-qimg-958ff592629e78d8ef0ec849841a623d";
  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.header}>ABOUT US</h1>
        <p className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at!
          <br />
          <img className={styles.image} src={url} alt="ChildImage" />
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
