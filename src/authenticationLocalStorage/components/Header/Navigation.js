import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn === true ? (
          <>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <button onClick={props.logoutHandler}>
                Logout 
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) }
       
      </ul>
    </nav>
  );
};

export default Navigation;
