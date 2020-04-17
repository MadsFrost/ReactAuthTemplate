import React, {ComponentClass} from 'react';
import './scss/_app.scss';
import DynamicNav from './components/menu/DynamicNav';
import Explore from './components/section/Explore';
import TestSection from './components/section/TestSection';
import { BrowserRouter as Route, Switch } from "react-router-dom";
import navigation from './navigation.json';


function App() {

  const DynamicRoutes = navigation.map((navItem) => {


      return (
              <Route exact path={navItem[1]} key={navItem[0]} name={navItem[0]}>
                
              </Route>
          )
    }
  );

  console.log(DynamicRoutes)

  return (
    <div className="main">
      <DynamicNav />
      <div className="primary">
        <Switch>
            {DynamicRoutes}
        </Switch>
      </div>
    </div>

  );
}

export default App;
