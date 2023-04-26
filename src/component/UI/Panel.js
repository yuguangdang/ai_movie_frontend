import styles from '../../css/Panel.module.css'

function Panel(props) {
  return <div className={styles.panel}>{props.children}</div>;
}

export default Panel;
