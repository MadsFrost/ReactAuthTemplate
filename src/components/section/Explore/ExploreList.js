import React from 'react'
import '../../../scss/modules/section/_section-base.scss'
import ExploreItem from './ExploreItem';

const ExploreLocations = [
    ["Denmark", "Copenhagen", 25, true ],
    ["Norway", "Oslo", 0, false ]
]
const ExploreList = () => {
    return (

        <div className="section">
            <div className="explore-section-list">
                <ExploreItem country={ExploreLocations[0][0]} city={ExploreLocations[0][1]} totalAds={ExploreLocations[0][2]} activated={ExploreLocations[0][3]}/>
            </div>

        </div>

    )
}

export default ExploreList;