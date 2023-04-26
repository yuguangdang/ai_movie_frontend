import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { createImages } from "../util/http";
import { movieActions } from "../store/movie-slice";
import PictureCard from "./PictureCard";

function CreateStory() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.setStyle("cartoon"));
  }, [dispatch]);

  const story = useSelector((state) => state.movie.story);
  const style = useSelector((state) => state.movie.style).payload;
  const images = useSelector((state) => state.movie.images).payload;

  const handleChange = (event) => {
    dispatch(movieActions.setStyle(event.target.value));
  };

  const createImagesHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const images = await createImages(story, style);
    setIsLoading(false);
    dispatch(movieActions.setImages(images));
  };

  return (
    <>
      <form onSubmit={createImagesHandler}>
        <label htmlFor="styles">Choose a style of your movie:</label>
        <select id="styles" name="style" onChange={handleChange}>
          <option value="cartoon">cartoon</option>
          <option value="disney">disney</option>
          <option value="graffiti">graffiti</option>
          <option value="surrealism">surrealism</option>
          <option value="mnimalism">mnimalism</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div>
        {isLoading && <p>Creating the images ...</p>}
        {images && <PictureCard  />}
      </div>
    </>
  );
}

export default CreateStory;
