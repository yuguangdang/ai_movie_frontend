import styles from "../../css/Error.module.css";

function Error({ message,  clickHandler}) {
  return (
    <div className={styles.error}>
      <p>{message}</p>
      <p>Try to use another prompt to create the story at the step one.</p>
      <button onClick={clickHandler}>OK</button>
    </div>
  );
}

export default Error;
