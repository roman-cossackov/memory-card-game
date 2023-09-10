import React from "react";
import ReactDOM from "react-dom";

import styles from "./WinAlert.module.css";

const WinAlert = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className={styles.darkBG}>
        <div className={styles.alert}>
          <div className={styles.modalHeader}>
            YOU WON!!!
          </div>
          <div className="modalContent">
            It took you {props.clicks} clicks
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
