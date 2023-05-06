import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { createImages } from "../util/http";
import { movieActions } from "../store/movie-slice";
import styles from "../css/CreateImages.module.css";
import Error from "./UI/Error";
import zipArrays from "../util/zipArrays";
import LoadingSign from "./UI/LoadingSign";

function CreateStory() {
  const [isError, setIsError] = useState({ isError: false, message: "" });

  const story = useSelector((state) => state.movie.story);
  const style = useSelector((state) => state.movie.style).payload;
  const images = useSelector((state) => state.movie.images).payload;
  const isLoading = useSelector((state) => state.movie.isLoading).payload;
  const zipped = zipArrays(story, images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.setStyle("Fantasy"));
  }, [dispatch]);

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
    dispatch(movieActions.setStep("prev"));
  };

  const handleChange = (event) => {
    dispatch(movieActions.setStyle(event.target.value));
  };

  const createImagesHandler = async (event) => {
    event.preventDefault();
    dispatch(movieActions.setIsLoading(true));
    try {
      const images = await createImages(story, style);
      dispatch(movieActions.setImages(images));
    } catch (error) {
      setIsError({ isError: true, message: error.response.data.error.message });
    }
  };

  return (
    <div className={styles.createImageContainer}>
      <h1>Step 2: Create images based on your story</h1>
      <form onSubmit={createImagesHandler} className={styles.formContainer}>
        <label htmlFor="styles" className={styles.label}>
          Choose a style of images:
          <select
            id="styles"
            name="style"
            onChange={handleChange}
            className={styles.select}
          >
            <option value="Fantasy">Fantasy</option>
            <option value="Realism">Realism</option>
            <option value="Disney">Disney</option>
            <option value="Surrealism">Surrealism</option>
            <option value="Anime">Anime</option>
            <option value="Abstract">Abstract</option>
            <option value="Pop Art">Pop Art</option>
            <option value="Cartoon">Cartoon</option>
          </select>
        </label>
        <button type="submit" className={isLoading ? "disabled-button" : ""}>
          Create images
        </button>
        {isError.isError && (
          <Error message={isError.message} clickHandler={errorConfirmHandler} />
        )}
      </form>

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
          <h2>Creating images ...</h2>
          <LoadingSign />
        </div>
      )}
    </div>
  );
}

export default CreateStory;
