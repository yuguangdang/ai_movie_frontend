import styles from "../../css/Error.module.css";

function Error({
  message = "Oops! Something went wrong. Please refresh the page and try again. If the problem persists, please contact our support team.",
  clickHandler,
}) {
  return (
    <div className={styles.modal}>
      <div className={styles.error}>
        <p>{message}</p>
        <button onClick={clickHandler}>OK</button>
      </div>
    </div>
  );
}

export default Error;
