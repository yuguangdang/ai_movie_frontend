import Voices from "./Voices";

function CreateMovie() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Step 3: Choose your favourite character to read your story.</h1>
      <Voices />
    </div>
  );
}

export default CreateMovie;
