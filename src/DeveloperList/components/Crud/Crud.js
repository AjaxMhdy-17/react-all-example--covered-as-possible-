import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import classes from "./crud.module.css";


const Crud = () => {
  const navigate = useNavigate();
  const [live, setLive] = useState(false);

  const goLive = () => {
    setLive(!live);
  };

  return (
    <div className={classes.crud__main}>
      <div className={classes.crud__heading}>
        <NavLink onClick={goLive} to="/crud/add" className={classes.nav_link}>
          {live === false ? (
            <h2> add your post live for greater then mobile screen</h2>
          ) : (
            <h2>Go Back to normal version</h2>
          )}
        </NavLink>
        <div><h2>This is demo page for nested routing example</h2>
            <h1>Please Check Crud Example in Home page middle of the dev section and review section</h1>
        </div>
      </div>
    </div>
  );
};

export default Crud;
