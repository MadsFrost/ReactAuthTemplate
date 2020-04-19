import React from 'react'
import '../../scss/modules/menu/_menuItem.scss';
import '../../scss/modules/menu/_menu.scss';
import {
    NavLink
  } from "react-router-dom";


const DynamicNavItem = (props) => {

    return (
            <NavLink activeclassname="active" className={props.givenClass} to={props.link} onClick={props.fncToggle}>{props.name}</NavLink>
    )
}

export default DynamicNavItem;
