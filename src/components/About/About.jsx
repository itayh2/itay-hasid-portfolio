import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="About Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                A recent Computer Science and Information Science graduate from
                the Ruppin Academic Center, I offer a strong blend of academic
                knowledge and practical skills in programming, algorithms, data
                analysis, and database management.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Passionate about technology and committed to continuous growth,
                I thrive in collaborative environments where I can contribute
                innovative solutions while expanding my expertise.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Seeking a challenging role in a forward-thinking tech company
                that values creativity and problem-solving abilities, where I
                can leverage my talents to develop cutting-edge solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
