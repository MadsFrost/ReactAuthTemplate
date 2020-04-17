import React from 'react';
import DynamicNavItems from './DynamicNavItems';
import '../../scss/modules/menu/_menu.scss';
import { useSelector, useDispatch } from 'react-redux';
import { onmobile } from '../../redux/actions';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

function DynamicNav() {

    const toggleMobile = useSelector(state => state.isMobile)
    const dispatch = useDispatch();

    const toggleMenu = () => {
        dispatch(onmobile())
        var toggle = document.getElementById("myTopnav");

    
        if (toggleMobile === false ) {
            toggle.className += " responsive";
        } else {
            toggle.className = "topnav";
        }
    }

    return (
        <div className="topnav" id="myTopnav">
            {DynamicNavItems}
            <a className="icon" id="toggleMenu" onClick={toggleMenu}>
            <i className="fa fa-bars">
                {toggleMobile ? <MenuOpenIcon fontSize={"large"} /> : <MenuIcon fontSize={"large"} />}
            </i>
            </a>
            
        </div>

)
}

export default DynamicNav;