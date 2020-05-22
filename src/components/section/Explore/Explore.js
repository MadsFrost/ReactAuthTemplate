import React from 'react';
import ExploreResult from "./ExploreResult";
import ExploreFilter from "./Filter/ExploreFilterRendered";
export default function Explore() {

  return (
    <div>
        <ExploreFilter />
        <ExploreResult />
    </div>
  );
}

