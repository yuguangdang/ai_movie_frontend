import { useParams } from "react-router-dom";

import styles from "../../css/VideoDetailPage.module.css";
import { useEffect, useState } from "react";
import { getVideo } from "../../util/http";
import Error from "../UI/Error";

export default function VideoDetailPage() {
  const [video, setVideo] = useState();
  const [isError, setIsError] = useState({ isError: false });
  const params = useParams();
  const videoId = params.videoId;

  useEffect(() => {
    const getVideoDetail = async () => {
      try {
        const video = await getVideo(videoId);
        setVideo(video);
      } catch (err) {
        console.log(err);
      }
    };
    getVideoDetail();
  }, [videoId]);

  const errorConfirmHandler = () => {
    setIsError({ isError: false, message: "" });
  };

  return (
    <div className={styles.container}>
      {isError.isError && (
        <Error message={isError.message} clickHandler={errorConfirmHandler} />
      )}
      {video && (
        <>
          <h3>{video.videoName}</h3>
          <div className={styles.videoContainer}>
            <video controls className={styles.video}>
              <source src={video.S3Url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.storyContainer}>
              {video.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className={styles.imageContainer}>
            {video.story.map((paragraph, index) => (
              <div key={index} className={styles.pictureCard}>
                <div>
                  <img
                    src={video.imageUrls[index]}
                    alt="openai_image"
                    className={styles.img}
                  />
                </div>
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
