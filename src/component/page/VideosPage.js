import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ReactPaginate from "react-paginate";
import styles from "../../css/VideoPage.module.css";
import { getVideos } from "../../util/http";
import { Link } from "react-router-dom";
import { movieActions } from "../../store/movie-slice";

function VideosPage() {
  const videos = useSelector((state) => state.movie.videos).payload;
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 6;

  useEffect(() => {
    const fetchVideos = async () => {
      const videos = await getVideos();
      dispatch(movieActions.setVideos(videos));
    };
    fetchVideos();
  }, [dispatch]);

  // Logic for displaying videos on the current page
  const indexOfLastVideo = (currentPage + 1) * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Handler function for changing pages
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className={styles.container}>
        {currentVideos.length > 0 &&
          currentVideos.map((video) => (
            <div className={styles.video} key={video.S3Url}>
              <video controls>
                <source src={video.S3Url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Link to={`/videoDetail/${video.videoId}`}>
                <p>{video.videoName}</p>
              </Link>
            </div>
          ))}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={Math.ceil(videos.length / videosPerPage)}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </>
  );
}

export default VideosPage;
