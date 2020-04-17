import React from 'react'
import DynamicNavItem from './DynamicNavItem';
import '../../scss/modules/menu/_menu.scss';
import navigation from '../../navigation.json' 


const DynamicNavItems = navigation.map((navItem) => {
    return (
            <DynamicNavItem key={navItem} name={navItem[0]} link={navItem[1]} icon={navItem[2]}/>
        )
}
);

export default DynamicNavItems;