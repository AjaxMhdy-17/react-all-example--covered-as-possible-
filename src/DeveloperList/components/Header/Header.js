import React , {useState} from "react";

import classes from "./header.module.css";
import Logo from "./Logo/Logo";
import MenuItems from "./MenuItems/MenuItems";

import { FaHamburger } from "react-icons/fa";
import Sidebar from "./Sidebar/Sidebar";

function Header() {

  const [openSidebar , setOpenSidebar] = useState(false) 

  const sidebarOpenHandler = () => {
    setOpenSidebar(true)
  }

  const closeSidebarHandler = () => {
    setOpenSidebar(false) 
  }

  return (
    <div className={classes.header__main}>
      <div className={classes.hamburger_icon_div}>
        <FaHamburger 
          onClick={sidebarOpenHandler}
        />
      </div>
      <div className={classes.sidebar}>
        {openSidebar && <Sidebar 
                          openSidebar={openSidebar}
                          closeSidebarHandler={closeSidebarHandler}
                        />
                          } 
      </div>
      <div className={classes.logo_div}>
        <Logo />
      </div>
      <div className={classes.menu_div}>
        <MenuItems />
      </div>
    </div>
  );
}

export default Header;
