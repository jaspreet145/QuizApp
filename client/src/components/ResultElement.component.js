import React from "react";
import styles from "../componentsStyles/TestResult.module.css";

function Resultelement(props) {
  return (
    <div className={styles.resultrow}>
      <div className={styles.element}>
        <span className={styles.mobileinfo}>
          <strong>Name : </strong>
        </span>
        {props.name}
      </div>
      <div className={styles.element}>
        <span className={styles.mobileinfo}>
          <strong>Email : </strong>
        </span>
        {props.email}
      </div>
      <div className={styles.element}>
        <span className={styles.mobileinfo}>
          <strong>Score : </strong>
        </span>
        {props.score}%
      </div>
    </div>
  );
}

export default Resultelement;
