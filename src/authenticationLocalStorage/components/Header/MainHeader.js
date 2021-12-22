import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <div className={classes.main__header}>
      <h1>A typical page</h1>
      <Navigation isLoggedIn={props.isLoggedIn} logoutHandler={props.logoutHandler} />
    </div>
  );
};

export default MainHeader;
