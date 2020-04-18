import React from 'react';
import './scss/_app.scss';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loggedon } from './redux/actions/';

// Sections for Routers 
import Signup from './components/section/Signup/Signup';
import Login from './components/section/Login/Login';
import LogoutView from './components/section/Logout/LogoutView';
import DynamicNav from './components/menu/DynamicNav';
import Error404 from './components/section/Error404/Error404';
// Components Import
import Explore from './components/section/Explore/Explore';
import TestSection from './components/section/TestSection/TestSection';



function App() {

  function Logout() {
    console.log("Function Clicked")
    dispatch(loggedon())
  }

  const toggleLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()


  const NotLogged = () => {
    return (
      <Switch>
        <Route exact path={"/"} component={withRouter(Explore)}/>
        <Route path={"/profile"}  component={withRouter(TestSection)}/>
        <Route path={"/messages"} component={withRouter(TestSection)}/>
        <Route path={"/listings"} component={withRouter(TestSection)}/>
        <Route path={"/settings"}  component={withRouter(TestSection)}/>
        <Route path={"/authentication/login"} component={withRouter(Login)}/>
        <Route path={"/signup"} component={Signup}/>  
        <Route component={Error404} />
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
        <Route path={"/authentication/logout"} onClick={Logout} component={LogoutView}/>
        <Route path={"/signup"} component={() => {return <Redirect to="/"/>}}/>  
        <Route path={"/authentication/login"} component={() => {return <Redirect to="/"/>}}/>
        <Route component={Error404} />
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
