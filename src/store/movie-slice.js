import { createSlice } from "@reduxjs/toolkit";

// const dummy_story = [
//   "Neliel was an adventurous young girl who was always looking for a way to explore the world around her. She had a curiosity about the world that was unmatched by any of her peers.",
//   "Growing up, Neliel lived in a small village in the countryside. Her parents taught her to be independent and to explore her surroundings. She often went out into the woods to look for different plants and animals. She was always fascinated by the beauty of nature and the mysteries it held.",
//   "One day, Neliel decided to go on a grand adventure. She packed her bags and set off on a journey to explore the world. She traveled to many different places, meeting new people and learning about different cultures. Everywhere she went, she was welcomed with open arms, as she was a kind and generous person.",
//   "As she traveled, Neliel encountered many different kinds of creatures and creatures of legend. She was always excited to learn about them and gain a better understanding of the world around her.",
//   "One day, Neliel came across a small village near a large lake. She decided to stop and explore the area. As she walked around, she noticed a large castle in the distance. She was intrigued and decided to explore the castle.",
//   "When she arrived at the castle, she was surprised to find that it was inhabited by a group of people. They welcomed her with open arms and welcomed her to stay with them.",
//   "Neliel was so happy to have found a home. She quickly fell in love with the people and the castle. She learned many things about the people, their culture, and their way of life. She also learned about the many creatures that lived in the lake near the castle.",
//   "Neliel was so fascinated by the creatures in the lake that she decided to stay and study them. She spent months studying their behavior and their habits. She even made friends with some of the creatures.",
//   "One day, she noticed that the creatures were acting differently than usual. They seemed to be in distress. Neliel was worried and decided to investigate. She soon discovered that the lake was being polluted by a nearby factory.",
//   "Neliel was determined to save the lake and its creatures. She worked with the people of the castle and the creatures of the lake to create a plan. After much hard work, they were able to get the factory to stop polluting the lake.",
//   "N",
// ];

// const dummy_images = [
//   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Urv9Ps0IvMV6Hqlf7A0vhnaf/user-A8pPT6I2SdP0cfV6y4IA76Sx/img-yPAgXyOZ89hRLC40q2fddTRX.png?st=2023-04-20T00%3A13%3A55Z&se=2023-04-20T02%3A13%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-19T23%3A47%3A15Z&ske=2023-04-20T23%3A47%3A15Z&sks=b&skv=2021-08-06&sig=Cvs9HA78oWdSNEqFWbesdVItKiIANcxVOpz5GBa5Vlc%3D",
//   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Urv9Ps0IvMV6Hqlf7A0vhnaf/user-A8pPT6I2SdP0cfV6y4IA76Sx/img-cgOewm6sbbXUOa8EZP4ykm9B.png?st=2023-04-20T00%3A13%3A55Z&se=2023-04-20T02%3A13%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-19T23%3A46%3A43Z&ske=2023-04-20T23%3A46%3A43Z&sks=b&skv=2021-08-06&sig=UK9Mr76lGt4LJz1%2B101cVCywHFak2rS9Ym27snV%2Bg9I%3D",
//   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Urv9Ps0IvMV6Hqlf7A0vhnaf/user-A8pPT6I2SdP0cfV6y4IA76Sx/img-FnA3wfoY4GW1J922vSIQCrGt.png?st=2023-04-20T00%3A13%3A55Z&se=2023-04-20T02%3A13%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-19T23%3A48%3A52Z&ske=2023-04-20T23%3A48%3A52Z&sks=b&skv=2021-08-06&sig=nIpMIWXCsriikoW/LiEp3q0LLY90ALcVRczdELitIqU%3D",
//   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Urv9Ps0IvMV6Hqlf7A0vhnaf/user-A8pPT6I2SdP0cfV6y4IA76Sx/img-f6JCl2U0QDXmfeMSd5Ze6KZX.png?st=2023-04-20T00%3A13%3A55Z&se=2023-04-20T02%3A13%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-19T23%3A45%3A40Z&ske=2023-04-20T23%3A45%3A40Z&sks=b&skv=2021-08-06&sig=wKlZ3OcQsn1dxLHj/Gx08Z3wbA5fxP5UsePNWHqjqtE%3D",
//   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Urv9Ps0IvMV6Hqlf7A0vhnaf/user-A8pPT6I2SdP0cfV6y4IA76Sx/img-MY1QbPv1G2wdq9XIAtEN4Hkn.png?st=2023-04-20T00%3A13%3A55Z&se=2023-04-20T02%3A13%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-20T00%3A56%3A36Z&ske=2023-04-21T00%3A56%3A36Z&sks=b&skv=2021-08-06&sig=edBKjCuWtM/zHDQG0fQ4Bq8qlOZ3bo7wxnvsaCjjvt4%3D",
//   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Urv9Ps0IvMV6Hqlf7A0vhnaf/user-A8pPT6I2SdP0cfV6y4IA76Sx/img-dRNvCjAT9HUL1bcIOK7HQ5uY.png?st=2023-04-20T00%3A13%3A54Z&se=2023-04-20T02%3A13%3A54Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-19T23%3A51%3A36Z&ske=2023-04-20T23%3A51%3A36Z&sks=b&skv=2021-08-06&sig=ZYzbjOpUS2yqvxw0hjayqfPTPbdJShnijkmUudSAcqw%3D",
//   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Urv9Ps0IvMV6Hqlf7A0vhnaf/user-A8pPT6I2SdP0cfV6y4IA76Sx/img-T3x0GdSFKiu6N938fXWHDFUT.png?st=2023-04-20T00%3A13%3A55Z&se=2023-04-20T02%3A13%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-19T23%3A57%3A46Z&ske=2023-04-20T23%3A57%3A46Z&sks=b&skv=2021-08-06&sig=JBRUhM7RDbmXK8Zun7/peh7799groV4L%2BwBF31rWwo4%3D",
//   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Urv9Ps0IvMV6Hqlf7A0vhnaf/user-A8pPT6I2SdP0cfV6y4IA76Sx/img-XojSn1OKkgeTriN3Hqg11KsZ.png?st=2023-04-20T00%3A13%3A55Z&se=2023-04-20T02%3A13%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-20T00%3A07%3A11Z&ske=2023-04-21T00%3A07%3A11Z&sks=b&skv=2021-08-06&sig=x7WyJSH8gTJPVqM16Lj5OkFiR3c4viGa8NbBrLd7qIY%3D",
//   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Urv9Ps0IvMV6Hqlf7A0vhnaf/user-A8pPT6I2SdP0cfV6y4IA76Sx/img-nSVQGF0lDXOKcTj0pBOdz1Rd.png?st=2023-04-20T00%3A13%3A55Z&se=2023-04-20T02%3A13%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-19T23%3A54%3A51Z&ske=2023-04-20T23%3A54%3A51Z&sks=b&skv=2021-08-06&sig=XZwu4heNI8ypr95rmTjhvxo7DaUWzbotRnwSNRnXoZQ%3D",
//   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Urv9Ps0IvMV6Hqlf7A0vhnaf/user-A8pPT6I2SdP0cfV6y4IA76Sx/img-UMhPe7EgmaIANnoEG3EvSyCw.png?st=2023-04-20T00%3A13%3A55Z&se=2023-04-20T02%3A13%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-19T23%3A40%3A03Z&ske=2023-04-20T23%3A40%3A03Z&sks=b&skv=2021-08-06&sig=v4yQTWt%2BzE0Gyih5rNVXx2rJbiFl0iyPd0JeovylHQQ%3D",
//   "https://oaidalleapiprodscus.blob.core.windows.net/private/org-Urv9Ps0IvMV6Hqlf7A0vhnaf/user-A8pPT6I2SdP0cfV6y4IA76Sx/img-sUtddyOp4pknVKv3uUYeY488.png?st=2023-04-20T00%3A13%3A54Z&se=2023-04-20T02%3A13%3A54Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-19T23%3A59%3A22Z&ske=2023-04-20T23%3A59%3A22Z&sks=b&skv=2021-08-06&sig=vUKw3RC0wosL%2BdacKDbIUCvXvP5EEzrxRGv/8DSquMU%3D",
// ];

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    step: 1,
    prompt: "",
    story: [],
    style: "",
    images: [],
    voice: "",
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
      console.log("This is from the store: " + JSON.stringify(state.images));
    },
    setStep(state, stepDirection) {
      if (stepDirection.payload === "prev" && state.step > 1) {
        state.step -= 1;
      } else if (stepDirection.payload === "next") {
        state.step += 1;
      }
    },
    setVoice(state, voice) {
      state.voice = voice;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice;
