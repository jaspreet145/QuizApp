import React, { useState } from "react";
import styles from "../componentsStyles/Header.module.css";
import { Link, useLocation } from "react-router-dom";

function Loginnav(props) {
  let location = useLocation();
  console.log(location.pathname);

  const logout = () => {
    localStorage.clear();
    props.setloggedin(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.navitems}>
        <div className={styles.logo}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            {" "}
            HOME{" "}
          </Link>
        </div>
        <div className={styles.navlinks1}>
          {location.pathname === "/dashboard" ? (
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Take Test
            </Link>
          ) : (
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              Dashboard
            </Link>
          )}
        </div>
        <div className={styles.navlinks2}>
          <Link
            to="/"
            onClick={logout}
            style={{ textDecoration: "none", color: "white" }}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Loginnav;
