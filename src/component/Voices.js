import { useDispatch } from "react-redux";

import { movieActions } from "../store/movie-slice";
import styles from "../css/Voices.module.css";
import voices from "../data/voicesDummyData";
import { useState, useEffect } from "react";

function Voices() {
  const dispatch = useDispatch();
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(null);

  const selectVoiceHandler = (index) => {
    if (selectedVoiceIndex === index) {
      setSelectedVoiceIndex(null);
      dispatch(movieActions.setNarrator({ name: "", id: "" }));
    } else {
      setSelectedVoiceIndex(index);
      dispatch(
        movieActions.setNarrator({
          name: voices[index].name,
          id: voices[index].id,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(movieActions.setNarrator({ name: "", id: "" }));
  }, [dispatch]);

  return (
    <div className={styles.voicesContainer}>
      {voices.map((voice, index) => {
        const isSelectClass =
          selectedVoiceIndex === index ? styles.isSelect : "";
        return (
          <div
            className={`${styles.vContainer} ${isSelectClass}`}
            key={voice.name}
          >
            <img
              key={voice.name}
              className={styles.img}
              onClick={() => selectVoiceHandler(index)}
              src={voice.imageUrl}
              alt={voice.name}
            ></img>
            <p>{voice.name}</p>
            <audio src={voice.audioUrl} controls />
          </div>
        );
      })}
    </div>
  );
}

export default Voices;
