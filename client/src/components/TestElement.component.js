import React from "react";
import { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import styles from "../componentsStyles/Testelement.module.css";

function Testelement(props) {
  let expiry = new Date(props.expiry);
  return (
    <Fragment>
      <Link
        to={{ pathname: "/abouttest", state: { ...props } }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={styles.row}>
          <div className={styles.element}>{props.pin}</div>
          <div className={styles.element}>{props.topicname}</div>
          <div className={styles.element}>{props.amount}</div>
          <div className={styles.element}>{props.time} mins</div>
          <div className={styles.element}>
            {expiry.getDate()}-{expiry.getMonth()}-{expiry.getFullYear()}
          </div>
        </div>
      </Link>
    </Fragment>
  );
}

export default Testelement;
