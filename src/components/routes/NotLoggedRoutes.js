import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Signup from '../section/Signup/Signup';
import Login from '../section/Login/LoginRedirectState';
import Error404 from '../section/Error404/Error404';
import TestSectionTwo from '../section/TestSection/TestSectionTwo';

const NotLoggedRoutes = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={withRouter(TestSectionTwo)}/>
            <Route path={"/login"} component={withRouter(Login)}/>
            <Route path={"/signup"} component={Signup}/>  
            <Route path={"/logout"} component={() => <Redirect to="/"/>}/>
            <Route component={Error404} />
        </Switch>
    )
}

export default NotLoggedRoutes
