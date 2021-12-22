import React from "react";
import { createPortal } from "react-dom";

import classes from "./backdrop.module.css";

function Overlay() {
  return <div className={classes.backdrop_main} />;
}

const portalElement = document.getElementById("backdrop");

const Backdrop = (props) => {
  console.log(props);
  return (
    <div>
      <div onClick={props.closeEdit}>
        {createPortal(<Overlay />, portalElement)}
      </div>
      <div className={classes.modal__content}>{props.children}</div>
    </div>
  );
};

export default Backdrop;
