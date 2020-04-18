import React from 'react';
import './scss/_app.scss';
import DynamicNav from './components/menu/DynamicNav';

// Sections for Routers 

import Explore from './components/section/Explore/Explore';
import TestSection from './components/section/TestSection/TestSection';
import Signup from './components/section/Signup/Signup';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loggedon } from './redux/actions/';

function App() {

  const toggleLogged = useSelector(state => state.isLogged)

  function Logout() {
    useDispatch(loggedon())
  }
  const NotLogged = () => {
    return (
      <Switch>
        <Route exact path={"/"} component={withRouter(Explore)}/>
        <Route path={"/profile"}  component={withRouter(TestSection)}/>
        <Route path={"/messages"} component={withRouter(TestSection)}/>
        <Route path={"/listings"} component={withRouter(TestSection)}/>
        <Route path={"/settings"}  component={withRouter(TestSection)}/>
        <Route path={"/login"} component={withRouter(TestSection)}/>
        <Route path={"/signup"} component={Signup}/>  
      </Switch>
    )
  }

  const Logged = () => {
    return (
      <Switch>
        <Route exact path={"/"} component={withRouter(Explore)}/>
        <Route path={"/profile"}  component={withRouter(TestSection)}/>
        <Route path={"/messages"} component={withRouter(TestSection)}/>
        <Route path={"/listings"} component={withRouter(TestSection)}/>
        <Route path={"/settings"}  component={withRouter(TestSection)}/>
        <Route path={"/logout"} onClick={Logout()} component={() => {return <Redirect to="/"/>}}/>
        <Route path={"/signup"} component={() => {return <Redirect to="/"/>}}/>  
      </Switch>
    )
  }
  return (

      <div className="main">
        <DynamicNav />
        <div className="primary">
          {toggleLogged ? <Logged /> : <NotLogged/>}
        </div>
      </div>

  );
}

export default App;
