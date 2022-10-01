import React from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";

import styles from './Modal.module.css'

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles.modal}>
          <div className={styles['modal-content']}>
            <Card>
              {props.children}
            </Card>
          </div>
        </div>,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
}

export default Modal;