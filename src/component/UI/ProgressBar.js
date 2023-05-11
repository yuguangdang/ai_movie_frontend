import styles from '../../css/ProgressBar.module.css'

function ProgressBar({progress}) {

  return (
    <div className={styles.container}>
      <div 
        className={styles.bar}
        style={{width: `${progress}%`}} 
      />
    </div>
  );
}

export default ProgressBar;
