import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    step: 1,
    prompt: "",
    story: [],
    style: "",
    images: [],
    narrator: { name: "", id: "" },
    isLoading: {
      type: "movie/setIsLoading",
      payload: false,
    },
  },
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
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice;
