import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import Panel from "../UI/Panel";
import styles from "../../css/About.module.css";

function AboutPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Panel>
        <div>
          <h1 className={styles.h1}>
            Stary <span className={styles.span}>AI</span>
          </h1>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <h2>
                <span className={styles.span}>Creativity</span>
              </h2>
              <p>
                Stary AI allows users to input a simple prompt and generate a
                story and images that correspond to the input. This can be a fun
                and creative exercise that encourages users to think outside the
                box and explore new ideas.
              </p>
            </li>
            <li className={styles.li}>
              <h2>
                <span className={styles.span}>Customization</span>
              </h2>
              <p>
                With the ability to select different image styles and narrative
                voices, users can personalize their experience and create
                content that aligns with their preferences.
              </p>
            </li>
            <li className={styles.li}>
              <h2>
                <span className={styles.span}>Learning</span>
              </h2>
              <p>
                Using this app can expose users to these technologies of of
                natural language processing, image generation, and voice
                synthesis, helping them learn about the capabilities and
                limitations of AI.
              </p>
            </li>
            <li className={styles.li}>
              <h2>
                <span className={styles.span}>Entertainment</span>
              </h2>
              <p>
                The app creates a video that combines images and narration,
                which can be a fun and engaging way to consume content. Users
                can enjoy the final product as a form of entertainment or share
                it with others to showcase their creativity.
              </p>
            </li>
          </ul>
        </div>
      </Panel>
      <Panel>
        <div>
          <h1>
            Founder and <span className={styles.span}>Developer</span>
          </h1>
          <h3>Yuguang Dang (Full-stack Web Developer)</h3>
          <div className={styles.founderContainer}>
            <div className={styles.selfIntroContainer}>
              <p>
                I am a full-stack engineer with expertise in the MERN stack. I
                have designed and developed various web and mobile applications
                using different languages (NodeJS, Python and PHP), frameworks
                (Express, Django, CodeIgniter), and databases (SQL and NoSQL). I
                also possess hands-on experience in AWS and GCP cloud services,
                such as App Engine, S3, and Lambda.
              </p>
              <p>
                Web development is not just a job for me, but a hobby that I
                take pleasure in. Recently, I relocated to Brisbane, Australia
                from the UK and am actively seeking a web development position.
                Please feel free to contact me if you are interested.
              </p>
            </div>
            <div className={styles.contactContainer}>
              <div>
                <p>Email: yuguangdang123@gmail.com</p>
                <p>Phone: +61 434557040</p>
                <div>
                  <FontAwesomeIcon icon={faFileAlt} />
                  <a
                    className={styles.cv}
                    href="https://drive.google.com/file/d/1HbqCN2rhxcOkJLDbyLE_G4JPoIFOJwgi/view?usp=share_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View CV
                  </a>
                </div>
                <div className={styles.iconContainer}>
                  <a
                    href="https://www.linkedin.com/in/yuguang-dang-b72850264/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faLinkedin}
                      size="3x"
                    />
                  </a>
                  <a
                    href="https://github.com/yuguangdang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faGithub}
                      size="3x"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </>
  );
}

export default AboutPage;
