import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieActions } from "../store/movie-slice";
import { createMovie } from "../util/http";

function CreateMovie() {
  const dispatch = useDispatch();
  const story = useSelector((state) => state.movie.story);
  const images = useSelector((state) => state.movie.images).payload;
  const voice = useSelector((state) => state.movie.voice).payload;

  useEffect(() => {
    dispatch(movieActions.setVoice("Arnold Schwarzenegger"));
  }, [dispatch]);

  const changeHandler = (event) => {
    dispatch(movieActions.setVoice(event.target.value));
  };

  const createMovieHandler = (event) => {
    event.preventDefault();
    createMovie(story, images, voice);
  };

  return (
    <>
      <form onSubmit={createMovieHandler}>
        <label htmlFor="styles">Choose a narrative voice</label>
        <select id="styles" name="style" onChange={changeHandler}>
          <option value="arnold schwarzenegger">Arnold Schwarzenegger</option>
          <option value="Mickey Mouse">Mickey Mouse</option>
          <option value="Sindirella">Sindirella</option>
          <option value="Snow White">Snow White</option>
          <option value="Optimus Prime">Optimus Prime</option>
        </select>
        <button type="submit">Create movie</button>
      </form>
    </>
  );
}

export default CreateMovie;
