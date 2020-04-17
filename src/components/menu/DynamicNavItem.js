import React from 'react'
import '../../scss/modules/menu/_menuItem.scss';
import '../../scss/modules/menu/_menu.scss';
import {
    Link
  } from "react-router-dom";

const DynamicNavItem = (props) => {
    
  
    return (
        <Link activeclassname="active" to={props.link}>{props.name}</Link>
    )
}

export default DynamicNavItem;
