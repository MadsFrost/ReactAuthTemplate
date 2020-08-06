import React from 'react'
import './../../../scss/base/explore/_exploreCardItem.scss';
import picture from './../../../assets/moose.jpg';
const ExploreCardItem = () => {
    return (
        <div className="personCard"> 
            <div className="personTop">
                <h1 className="personScreenName">MyName</h1>
                <p>Working: </p>
            </div>
            <div className="personMid">
                Picture
            </div>
            <div className="personFooter">
                Footer
            </div>   
        </div>
    )
}

export default ExploreCardItem
