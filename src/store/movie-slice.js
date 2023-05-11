import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  prompt: "",
  story: [],
  style: {
    payload: "fantasy"
  },
  images: {
    payload: [],
  },
  narrator: { name: "", id: "" },
  isLoading: {
    payload: false,
  },
  createMovieStatus: {
    payload: { status: "not start", progress: 0 },
  },
  videos: {
    payload: [],
  },
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    setPrompt(state, prompt) {
      state.prompt = prompt;
    },
    setStory(state, story) {
      const paragraphs = story.payload.split("\n\n");
      state.story = paragraphs.slice(1);
    },
    setStyle(state, style) {
      state.style = style;
    },
    setImages(state, images) {
      state.images = images;
    },
    setStep(state, stepDirection) {
      if (stepDirection.payload === "prev" && state.step > 1) {
        state.step -= 1;
      } else if (stepDirection.payload === "next") {
        state.step += 1;
      }
    },
    setNarrator(state, narrator) {
      state.narrator = narrator;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setVideoUrl(state, videoUrl) {
      state.videoUrl = videoUrl;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
    setCreateMovieStatus(state, createMovieStatus) {
      state.createMovieStatus = createMovieStatus;
    },
    setVideos(state, videos) {
      state.videos = videos;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice;
