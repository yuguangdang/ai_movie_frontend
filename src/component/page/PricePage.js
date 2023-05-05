import Panel from "../UI/Panel";
import styles from "../../css/Pricing.module.css";

function MainNavigation() {
  return (
    <Panel>
      <div className={styles.container}>
        <h1>Pricing</h1>
        <div className={styles.textContainer}>
          <p>
            To use the OpenAI API for ChatGPT and DALL-E to generate stories and
            corresponding images, I am required to pay for each API request.
            Additionally, although the FakeYou API is available for free, I have
            purchased the elite package to ensure the best user experience
            possible.
          </p>
          <p>
            Developing this project has been a pleasure, and I hope that users
            will enjoy the app as well. If web traffic were to significantly
            increase in the future, I may consider monetizing the service, but
            for now, it is completely free for everyone to enjoy.
          </p>
        </div>
      </div>
    </Panel>
  );
}

export default MainNavigation;
