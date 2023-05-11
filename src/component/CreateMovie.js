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
      <h2>Step 3: Choose your favourite character to read your story.</h2>
      <Voices />
    </div>
  );
}

export default CreateMovie;
