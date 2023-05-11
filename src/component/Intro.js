import styles from "../css/Intro.module.css";

import Panel from "./UI/Panel";
import logo from "../image/logo.png";

function Intro() {
  return (
    <Panel>
      <div className={styles.introContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.h1}>
            Stary <span className={styles.span}>AI</span>
          </h1>
          <h2>Create your own story video in 3 steps.</h2>
          <ol>
            <li>
              <h4>Input a simple prompt and Stary AI will develop the plot</h4>
            </li>
            <li>
              <h4>Visualize the story with images in your preferred style</h4>
            </li>
            <li>
              <h4>Choose your favourite character to narrate the tale</h4>
            </li>
          </ol>
          <hr></hr>
          <p className={styles.p}>
            Stary AI is powered by ChatGTP, DALL.E and FakeYou.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={logo} alt="chatGTP Logo"></img>
        </div>
      </div>
    </Panel>
  );
}

export default Intro;
