import React from 'react'
import '../../../../scss/base/explore/_exploreFilter.scss'; // SCSS styles
import FilterSelect from './FilterSelect';

const dummyData = [
        ["Woman","Trans"],
        ["All","18-29 years", "30-39 years", "40+ years" ],
        ["All","Copenhagen", "Jylland", "Sjælland", "Fyn", "Lolland", "Falster","Bornholm"],
        ["All", "Outcall", "Incall"]
    ]

console.log(dummyData.data)

const ExploreFilter = () => {

return (
    dummyData.map((item,i) => 
        <div>
            <FilterSelect key={[dummyData[item]]} values={dummyData[i]}/>
        </div>   
    ))}


const ExploreFilterRendered = () => {

    return ( 
        <div className="filter-explore-wrap">
            <ExploreFilter/>
        </div>
    )
}

export default ExploreFilterRendered;
