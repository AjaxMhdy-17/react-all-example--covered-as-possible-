import React from 'react'

import classes from './singleItem.module.css'
import { NavLink } from 'react-router-dom'

function SingleItem(props) {

    return (
        <li className={`${classes.single_menu_item}`} onClick={props.onClick}> 
            <NavLink to={props.url} className={props.icon ? classes.green : classes.red}> 
                {props.children} 
            </NavLink>
        </li>
    )
}

export default SingleItem
