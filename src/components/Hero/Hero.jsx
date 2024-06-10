import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Itay</h1>
        <p className={styles.description}>
          Computer Science graduate with strong self-learning abilities,
          attention to detail, and excellent teamwork skills. Thrives under
          pressure and eager to contribute to innovative software development
          projects in a dynamic team environment
        </p>
        <a href="mailto:itay080297@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
