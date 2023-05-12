import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "../css/DisplayMovie.module.css";
import Modal from "./UI/Modal";
import { movieActions } from "../store/movie-slice";
import ProgressBar from "./UI/ProgressBar";

export default function DisplayMovie() {
  const story = useSelector((state) => state.movie.story);
  const images = useSelector((state) => state.movie.images).payload;
  const { progress, url } = useSelector(
    (state) => state.movie.createMovieStatus
  ).payload;

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createNewHandler = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden"; // disable scrolling
  };

  const handleModalClose = (confirmed) => {
    setShowModal(false);
    if (confirmed) {
      dispatch(movieActions.reset());
    }
    document.body.style.overflow = "auto"; // re-enable scrolling
  };

  return (
    <div className={styles.container}>
      {showModal && (
        <Modal onClose={handleModalClose}>
          <p>
            You might find your video in the videos tab, but it is not
            guaranteed with more videos being created.
          </p>
          <p>Please confirm if you want to continue?</p>
        </Modal>
      )}

      {url === undefined ? (
        <div className={styles.loadingContainer}>
          <h3>
            Stary <span className={styles.span}>AI</span> is working hard to
            create your video ...
          </h3>
          <ProgressBar progress={progress} />
        </div>
      ) : (
        <div className={styles.videoContainer}>
          <video controls className={styles.video}>
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.storyContainer}>
            {story.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
      <div className={styles.imageContainer}>
        {story.map((paragraph, index) => (
          <div key={index} className={styles.pictureCard}>
            <div>
              <img
                src={images[index]}
                alt="openai_image"
                className={styles.img}
              />
            </div>
            <p>{paragraph}</p>
          </div>
        ))}
      </div>
      {url !== undefined ? (
        <button className={styles.button} onClick={createNewHandler}>
          Create a new one
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
