import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "../../css/VideoDetailPage.module.css";
import zipArrays from "../../util/zipArrays";

export default function VideoDetailPage() {
  const videos = useSelector((state) => state.movie.videos).payload;
  const params = useParams();
  const videoId = params.videoId;
  const video = videos.filter((video) => video.videoId === videoId)[0];
  const zipped = zipArrays(video.story, video.imageUrls);

  return (
    <div className={styles.container}>
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
        {zipped.map((pair) => (
          <div key={pair[0]} className={styles.pictureCard}>
            <div>
              <img src={pair[1]} alt="openai_image" className={styles.img} />
            </div>
            <p>{pair[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
