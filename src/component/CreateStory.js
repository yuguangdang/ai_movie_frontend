import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { createStory } from "../util/http";
import { movieActions } from "../store/movie-slice";
import styles from "../css/CreateStory.module.css";
import LoadingSign from "./UI/LoadingSign";

function CreateStory() {
  const [isInputValid, setIsInputValid] = useState(false);

  const dispatch = useDispatch();

  const prompt = useSelector((state) => state.movie.prompt).payload;
  const story = useSelector((state) => state.movie.story);
  const isLoading = useSelector((state) => state.movie.isLoading).payload;

  const handleChange = (event) => {
    if (event.target.value !== "") {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
    dispatch(movieActions.setPrompt(event.target.value));
  };

  const createStoryHandler = async (event) => {
    event.preventDefault();
    dispatch(movieActions.setIsLoading(true));
    const res = await createStory(prompt);
    dispatch(movieActions.setIsLoading(false));
    dispatch(movieActions.setStory(res.data.result));
  };

  return (
    <div className={styles.createStoryContainer}>
      <h1>
        Step 1: Tell Stary <span className={styles.span}>AI</span> about the
        character
      </h1>
      <form onSubmit={createStoryHandler} className={styles.formContainer}>
        <label className={styles.label}>
          Who is the main character of the story?
          <input type="text" onChange={handleChange} className={styles.input} />
          <p className={styles.p}>
            Hint: It could be animals, celebrities, aliens, cartoons, whatever
          </p>
        </label>
        <button
          type="submit"
          disabled={!isInputValid}
          className={!isInputValid || isLoading ? "disabled-button" : ""}
        >
          Create story
        </button>
        {isLoading && (
          <div className={styles.loadingContainer}>
            <h2> Creating a story about {prompt} ...</h2>
            <LoadingSign />
          </div>
        )}
        <div
          className={styles.storyContainer}
          style={
            isLoading || story.length === 0
              ? { display: "none" }
              : { display: "block" }
          }
        >
          {story &&
            story.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      </form>
    </div>
  );
}

export default CreateStory;
