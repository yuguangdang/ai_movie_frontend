import { useSelector } from "react-redux";

import zipArrays from "../util/zipArrays";
import styles from '../css/PictureCard.module.css'

function PictureCard() {
  const story = useSelector((state) => state.movie.story);
  const images = useSelector((state) => state.movie.images).payload;
  const zipped = zipArrays(story, images);

  return (
    <>
      {zipped.map((pair) => (
        <div key={pair[0]} className={styles.pictureCard}>
          <img src={pair[1]} alt="openai_image" />
          <p>{pair[0]}</p>
        </div>
      ))}
    </>
  );
}

export default PictureCard;
