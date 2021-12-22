import React, { useContext } from "react";

import classes from "./menuItems.module.css";
import { loginLinks, social, logOutLinks } from "./menuData";
import SingleItem from "./SingleItem/SingleItem";
import { CtxOfDev } from "../../../CtxAndReducer/CtxAndReducer";
import { Link } from "react-router-dom";

function MenuItems(props) {
  const ctx = useContext(CtxOfDev);

  // console.log(ctx.isLogin);

  let links = ctx.isLogin ? loginLinks : logOutLinks;

  return (
    <div
      className={`${classes.menu_main_div} ${
        props.sidebar ? classes.display__inline : ""
      }`}
    >
      {/* <button>logout</button> */}
      <ul
        className={`${classes.menu_items} ${
          props.sidebar
            ? classes.display_menu_sideabar
            : classes.controlled_menu_item
        }`}
      >
        {links.map((link) => {
          return (
            <SingleItem key={link.id} url={link.url}>
              {link.text}
            </SingleItem>
          );
        })}
        {ctx.isLogin && (
          <SingleItem onClick={ctx.logoutHandler} key={5} url={"/login"}>
            Logout
          </SingleItem>
        )}
      </ul>
      <ul
        className={`${classes.menu_items_icons} ${
          props.sidebar ? classes.sidebar_social : classes.menu_social
        }`}
      >
        {social.map((social) => (
          <SingleItem icon={true} key={social.id} url={social.url}>
            {social.icon}
          </SingleItem>
        ))}
      </ul>
    </div>
  );
}

export default MenuItems;
