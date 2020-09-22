import React from "react";
import styles from "../componentsStyles/TestNav.module.css";
import Timer from "./Timer.component";
import axios from "axios";

function TestNav(props) {
  return (
    <div className={styles.header}>
      <div className={styles.navitems}>
        <div></div>
        <div className={styles.timer}>
          <Timer {...props} />
        </div>
        <div className={styles.submit} onClick={props.submithandler}>
          Submit
        </div>
      </div>
    </div>
  );
}

export default TestNav;
