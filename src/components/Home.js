import React from "react";
import AboutHack from "./AboutHack";
import Prizes from "./Prizes";
import Tracks from "./Tracks";
import FAQ from "./FAQ";
import ConductedBy from "./ConductedBy";
import styles from "../styles/Home.module.css";
import backgroundImage from "../assets/background.png";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hack-a-Delic</h1>
        <p className={styles.subtitle}>Lorem Ipsum Dolor Sit amet, Lorem Ipsum </p>
      </div>
      </div>
      <AboutHack />
      <Tracks />
      {/* <Prizes /> */}
      <ConductedBy />
      <FAQ />
    </div>
  );
};

export default Home;
