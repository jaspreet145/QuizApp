import React from "react";
import styles from "../componentsStyles/TestResult.module.css";

function Resultelement(props) {
  return (
    <div className={styles.resultrow}>
      <div className={styles.element}>{props.name}</div>
      <div className={styles.element}>{props.email}</div>
      <div className={styles.element}>{props.score}</div>
    </div>
  );
}

export default Resultelement;
