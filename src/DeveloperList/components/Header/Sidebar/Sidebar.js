import React from "react";

import classes from "./sidebar.module.css";
import Logo from "../Logo/Logo";

import MenuItems from "../MenuItems/MenuItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

function Sidebar(props) {
  return (
    <div className={`${classes.sidebar__main} ${props.openSidebar ? classes.open : classes.close }`}>
      <div className={classes.sidebar__logo}>
        <Logo />
      </div>
      <MenuItems sidebar={true} />
      <div
        onClick={props.closeSidebarHandler} 
      >
        <Backdrop/>
      </div>
    </div>
  );
}

export default Sidebar;
