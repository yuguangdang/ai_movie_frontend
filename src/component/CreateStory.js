import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { createStory } from "../util/http";
import { movieActions } from "../store/movie-slice";

function CreateStory() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const prompt = useSelector((state) => state.movie.prompt).payload;
  const story = useSelector((state) => state.movie.story);

  const handleChange = (event) => {
    dispatch(movieActions.setPrompt(event.target.value));
  };

  const createStoryHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await createStory(prompt);
    setIsLoading(false);
    dispatch(movieActions.setStory(res.data.result));
  };

  return (
    <form onSubmit={createStoryHandler}>
      <label>
        Prompt:
        <input type="text" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      {isLoading && <p>Creating the story ...</p>}
      {story && story.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </form>
  );
}

export default CreateStory;
