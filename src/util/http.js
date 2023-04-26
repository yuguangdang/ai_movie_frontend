import axios from "axios";

// const BAKCEND_URL = "http://172.16.11.253:8080";
const BAKCEND_URL = "http://localhost:8080";

export async function createStory(prompt) {
  const data = { prompt: prompt };
  const httpUrl = BAKCEND_URL + "/create/create-story";

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
  const httpUrl = BAKCEND_URL + "/create/create-images";

  try {
    const response = await axios.post(httpUrl, data);
    const images = response.data.images;
    return images;
  } catch (error) {
    console.error("Error in createStory:", error);
    throw error;
  }
}

export async function createMovie(story, images, voice) {
  const data = { prompts: story, images: images, voice: voice };
  const httpUrl = BAKCEND_URL + "/create/create-movie";

  try {
    const response = await axios.post(httpUrl, data);
    console.log(response)
  } catch (error) {
    console.error("Error in createMovie:", error);
    throw error;
  }
}
