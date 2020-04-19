import React from 'react';
import '../../../scss/modules/section/_section-explore.scss';
import '../../../scss/modules/section/_section-base.scss';
import { Link } from 'react-router-dom';

const ExploreListItem = (props) => {
    const city = props.city;
    return (
        <div className={"Explore "+ city}>
            <div className="ExploreText">
                <button>
                    <Link to={"/"+city}>
                        Explore {props.city}
                    </Link>
                </button>

            </div>
        </div>
    )
}

export default ExploreListItem
