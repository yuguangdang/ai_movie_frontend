import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/movie-slice";

import CreateStory from "../CreateStory";
import CreateImages from "../CreateImages";
import CreateMovie from "../CreateMovie";
import DisplayMovie from "../DisplayMovie";
import Panel from "../UI/Panel";
import { useEffect, useState } from "react";
import Intro from "../Intro";
import styles from "../../css/CreateMoviePage.module.css";
import { createMovie } from "../../util/http";

function CreateMoviePage() {
  const step = useSelector((state) => state.movie.step);
  const story = useSelector((state) => state.movie.story);
  const prompt = useSelector((state) => state.movie.prompt).payload;
  const narrator = useSelector((state) => state.movie.narrator).payload;
  const images = useSelector((state) => state.movie.images).payload;
  const isLoading = useSelector((state) => state.movie.isLoading).payload;
  const dispatch = useDispatch();

  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const stepHandler = (stepDirection) => {
    if (step === 3 && stepDirection === "next") {
      createMovie(prompt, story, images, narrator);
    }
    dispatch(movieActions.setStep(stepDirection));
  };

  useEffect(() => {
    setIsNextDisabled(true);
    if (step === 1 && story.length > 0) {
      setIsNextDisabled(false);
    } else if (step === 2 && images.length !== 0) {
      setIsNextDisabled(false);
    } else if (
      step === 3 &&
      narrator !== undefined &&
      narrator.name !== "" &&
      narrator.id !== ""
    ) {
      setIsNextDisabled(false);
    }
  }, [story, images, narrator, step]);

  useEffect(() => {
    dispatch(movieActions.setImages([]));
  }, [dispatch, story]);

  let process;

  switch (step) {
    case 1:
      process = <CreateStory />;
      break;
    case 2:
      process = <CreateImages />;
      break;
    case 3:
      process = <CreateMovie />;
      break;
    case 4:
      process = <DisplayMovie />;
      break;

    default:
      process = <CreateStory />;
  }

  return (
    <>
      <Intro />
      <Panel>
        <div>
          <div>{process}</div>
          <div
            className={styles.buttonContainer}
            style={isLoading ? { display: "none" } : { display: "flex" }}
          >
            <button
              style={step === 1 ? { display: "none" } : { display: "block" }}
              onClick={stepHandler.bind(null, "prev")}
            >
              Previous
            </button>
            <button
              onClick={stepHandler.bind(null, "next")}
              className={isNextDisabled ? "hide" : ""}
            >
              Next
            </button>
          </div>
        </div>
      </Panel>
    </>
  );
}

export default CreateMoviePage;
