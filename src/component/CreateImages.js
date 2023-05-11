import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { createImages } from "../util/http";
import { movieActions } from "../store/movie-slice";
import styles from "../css/CreateImages.module.css";
import Error from "./UI/Error";
import zipArrays from "../util/zipArrays";
import LoadingSign from "./UI/LoadingSign";
import CustomSelect from "./UI/CustomSelect";

function CreateStory() {
  const [isError, setIsError] = useState({ isError: false, message: "" });

  const story = useSelector((state) => state.movie.story);
  const style = useSelector((state) => state.movie.style).payload;
  const images = useSelector((state) => state.movie.images).payload;
  const isLoading = useSelector((state) => state.movie.isLoading).payload;
  const zipped = zipArrays(story, images);
  const dispatch = useDispatch();

  // Wait until all pics are loaded before display
  useEffect(() => {
    const imagesToLoad = images.length;
    let loadedCount = 0;

    const imageLoadHandler = () => {
      loadedCount++;
      if (loadedCount === imagesToLoad) {
        dispatch(movieActions.setIsLoading(false));
      }
    };

    images.forEach((image) => {
      const img = new Image();
      img.addEventListener("load", imageLoadHandler);
      img.src = image;
    });

    return () => {
      images.forEach((image) => {
        const img = new Image();
        img.removeEventListener("load", imageLoadHandler);
        img.src = "";
      });
    };
  }, [dispatch, images]);

  const errorConfirmHandler = () => {
    setIsError({ isError: false, message: "" });
    dispatch(movieActions.reset());
  };

  const selectHandler = async (selectStyle) => {
    dispatch(movieActions.setStyle(selectStyle));
    dispatch(movieActions.setIsLoading(true));
    try {
      const images = await createImages(story, selectStyle);
      dispatch(movieActions.setImages(images));
    } catch (error) {
      dispatch(movieActions.setIsLoading(false));
      setIsError({ isError: true, message: error.response.data.error.message });
    }
  };

  return (
    <div className={styles.createImageContainer}>
      <h2>Step 2: Create images based on your story</h2>
      <CustomSelect
        className={styles.customSelect}
        onSelect={selectHandler}
        options={[
          "Fantasy",
          "Realistic",
          "Disney",
          "Surrealistic",
          "Anime",
          "Retro",
          "Watercolor",
          "Cartoon",
          "Oil painting",
          "Sketch",
        ]}
        defaultOption="Choose a style"
      />

      {isError.isError && (
        <Error message={isError.message} clickHandler={errorConfirmHandler} />
      )}

      {!isLoading ? (
        <div className={styles.imageContainer}>
          {zipped.map((pair) => (
            <div key={pair[0]} className={styles.pictureCard}>
              <div>
                <img src={pair[1]} alt="openai_image" className={styles.img} />
              </div>
              <p>{pair[0]}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.loadingContainer}>
          <h3>{`Creating images in ${
            style.charAt(0).toLowerCase() + style.slice(1)
          } style ...`}</h3>
          <LoadingSign />
        </div>
      )}
    </div>
  );
}

export default CreateStory;
