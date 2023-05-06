import loading from "../../image/loading.gif";

export default function LoadingSign() {
  return (
    <div>
      <img src={loading} alt="Loading..." style={{ width: "12rem" }} />
    </div>
  );
}
