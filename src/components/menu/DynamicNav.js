import React from 'react';
import '../../scss/modules/menu/_menu.scss';
import DynamicNavItem from './DynamicNavItem';
import '../../scss/modules/menu/_menu.scss';


import navigationLogged from '../../navigationLogged.json' 
import navigationNotLogged from '../../navigationNotLogged.json';
import { useSelector, useDispatch } from 'react-redux';
import { onmobile } from '../../redux/actions';


import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

function DynamicNav(props) {
    
    const toggleMobile = useSelector(state => state.isMobile)
    const toggleLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();

    const DynamicNavItems = () => {

        if (toggleLogged === false ) {
            const DynamicNavItems = navigationNotLogged.map((navItem) => {
                return (
                        <DynamicNavItem key={navItem} name={navItem[0]} link={navItem[1]} icon={navItem[2]}/>
                    )
            }
            );
            return DynamicNavItems
            
        } else if (toggleLogged === true) {
            const DynamicNavItems = navigationLogged.map((navItem) => {
                return (
                        <DynamicNavItem key={navItem} name={navItem[0]} link={navItem[1]} icon={navItem[2]}/>
                    )
            }
            );
            return DynamicNavItems
     }
    }

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
            <DynamicNavItems/>
     
            <button className="icon" id="toggleMenu" onClick={toggleMenu} href="#">
                <i className="fa fa-bars">
                    {toggleMobile ? <MenuOpenIcon fontSize={"large"} /> : <MenuIcon fontSize={"large"} />}
                </i>
            </button>
            
        </div>

)
}


export default DynamicNav;