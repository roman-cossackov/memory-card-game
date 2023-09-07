import React from "react";
import ReactDOM from "react-dom";

import styles from "./WinAlert.module.css";
import { RiCloseLine } from "react-icons/ri";

const WinAlert = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className={styles.darkBG} onClick={() => props.onCloseWonAlert()}>
        <div className={styles.alert}>
          <button className={styles.closeBtn} onClick={() => props.onCloseWonAlert()}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            YOU WON!!!
          </div>
          <div className={styles.alertButton}>
            <button onClick={() => {props.onCloseWonAlert();props.onResetGame()}}>Start new game</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("alert")
  );
};

export default WinAlert;
