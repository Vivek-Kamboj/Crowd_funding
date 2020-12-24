import React from "react";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <h1>Contact us</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
        consequatur ea quia inventore excepturi officiis deserunt sequi, esse
        nobis laudantium tempora aut, animi praesentium id! Necessitatibus
        laborum vitae vero at!
      </p>
      <h2>Map</h2>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.376170291284!2d78.17195011486825!3d26.249452083417705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sIndian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1608394606599!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        aria-hidden="false"
      ></iframe>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
