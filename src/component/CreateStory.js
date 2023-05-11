import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { createStory } from "../util/http";
import { movieActions } from "../store/movie-slice";
import styles from "../css/CreateStory.module.css";
import LoadingSign from "./UI/LoadingSign";
import Error from "./UI/Error";

function CreateStory() {
  const [isInputValid, setIsInputValid] = useState(false);
  const [isError, setIsError] = useState({ isError: false });

  const dispatch = useDispatch();

  const prompt = useSelector((state) => state.movie.prompt).payload;
  const story = useSelector((state) => state.movie.story);
  const isLoading = useSelector((state) => state.movie.isLoading).payload;

  const errorConfirmHandler = () => {
    setIsError({ isError: false, message: "" });
    dispatch(movieActions.reset());
  };

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
    try {
      dispatch(movieActions.setIsLoading(true));
      const res = await createStory(prompt);
      dispatch(movieActions.setIsLoading(false));
      dispatch(movieActions.setStory(res.data.result));
      dispatch(movieActions.setImages([]));
    } catch (err) {
      setIsError({ isError: true});
      dispatch(movieActions.setIsLoading(false));
    }
  };

  return (
    <div className={styles.createStoryContainer}>
      {isError.isError && (
        <Error message={isError.message} clickHandler={errorConfirmHandler} />
      )}
      <h2>
        Step 1: Tell Stary <span className={styles.span}>AI</span> about the
        story
      </h2>
      <form onSubmit={createStoryHandler} className={styles.formContainer}>
        <label className={styles.label}>
          <textarea
            type="text"
            rows="5"
            onChange={handleChange}
            className={styles.input}
            placeholder="e.g. A dog lives on Mars."
          />
        </label>
        <button
          type="submit"
          disabled={!isInputValid}
          className={!isInputValid || isLoading ? "disabled-button" : ""}
        >
          {story.length > 0 ? "Recreate story" : "Create story"}
        </button>
        {isLoading && (
          <div className={styles.loadingContainer}>
            <h3> Creating a story about {prompt} ...</h3>
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
          {story.length > 0 &&
            story.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      </form>
    </div>
  );
}

export default CreateStory;
