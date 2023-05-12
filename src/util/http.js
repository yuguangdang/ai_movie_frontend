import axios from "axios";

let BACKEND_URL;

if (process.env.NODE_ENV === "development") {
  BACKEND_URL = "http://localhost:8080";
} else if (process.env.NODE_ENV === "production") {
  BACKEND_URL = "http://staryai.ap-southeast-2.elasticbeanstalk.com";
}

export async function createStory(prompt) {
  const data = { prompt: prompt };
  const httpUrl = BACKEND_URL + "/create/create-story";

  try {
    const response = await axios.post(httpUrl, data);
    return response;
  } catch (error) {
    console.error("Error in createStory:", error);
    throw error;
  }
}

export async function createImages(story, style) {
  const data = { prompts: story, style: style };
  const httpUrl = BACKEND_URL + "/create/create-images";

  try {
    const response = await axios.post(httpUrl, data);
    const images = response.data.images;
    return images;
  } catch (error) {
    console.error("Error in createStory:", error);
    throw error;
  }
}

export async function createMovie(
  prompt,
  story,
  images,
  narrator,
  handleStatusUpdate
) {
  const data = { prompt, story, images, narrator };
  const createMovieUrl = `${BACKEND_URL}/create/create-movie`;
  const getCreateMovieStatusUrl = `${BACKEND_URL}/create/get-create-movie-status`;

  try {
    const {
      data: { requestId },
    } = await axios.post(createMovieUrl, data);

    await new Promise((resolve, reject) => {
      const checkInterval = setInterval(async () => {
        try {
          const { data: statusData } = await axios.get(
            `${getCreateMovieStatusUrl}?requestId=${requestId}`
          );
          handleStatusUpdate(statusData);

          if (statusData.status === "finished") {
            clearInterval(checkInterval);
            resolve();
          } else if (statusData.status === "error") {
            console.error(statusData.error);
            clearInterval(checkInterval);
            reject(new Error(statusData.error));
          }
        } catch (error) {
          console.error("Error in getCreateMovieStatus:", error);
          clearInterval(checkInterval);
          reject(error);
        }
      }, 5000);
    });
  } catch (error) {
    console.error("Error in createMovie:", error);
    throw error;
  }
}

export async function getVideos() {
  const httpUrl = BACKEND_URL + "/create/get-videos";

  try {
    const response = await axios.get(httpUrl);
    return response.data;
  } catch (error) {
    console.error("Error in get video urls:", error);
    throw error;
  }
}

export async function getVideo(videoId) {
  const httpUrl = BACKEND_URL + `/create/get-video?videoId=${videoId}`;

  try {
    const response = await axios.get(httpUrl);
    return response.data;
  } catch (error) {
    console.error("Error in get video urls:", error);
    throw error;
  }
}
