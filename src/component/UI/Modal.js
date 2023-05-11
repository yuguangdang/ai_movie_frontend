import styles from '../../css/Modal.module.css'

const Modal = ({ onClose, children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {children}
        <div className={styles.modalButtons}>
          <button onClick={() => onClose(false)}>Cancel</button>
          <button onClick={() => onClose(true)}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
