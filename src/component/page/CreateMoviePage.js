import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/movie-slice";

import CreateStory from "../CreateStory";
import CreateImages from "../CreateImages";
import CreateMovie from "../CreateMovie";
import Panel from "../UI/Panel";

function CreateMoviePage() {
  const step = useSelector((state) => state.movie.step);
  const dispatch = useDispatch();

  const stepHandler = (stepDirection) => {
    dispatch(movieActions.setStep(stepDirection));
  };

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
    default:
      process = <CreateStory />;
  }
  return (
    <Panel>
      <div>{process}</div>
      <div>
        <button onClick={stepHandler.bind(null, "prev")}>Previous</button>
        <button onClick={stepHandler.bind(null, "next")}>Next</button>
      </div>
    </Panel>
  );
}

export default CreateMoviePage;
