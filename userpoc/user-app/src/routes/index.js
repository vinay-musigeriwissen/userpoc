import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../screens/login";
import AdminHome from "../screens/adminhome";
import UserForm from "../screens/userform";
import Header from '../components/header';
import ProtectedRoute from "../components/protectedroute";
import Toast from '../components/toast/index';

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Toast />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/userform" component={UserForm} />
                    <ProtectedRoute exact={true} path="/adminhome" component={AdminHome} />
                </Switch>
            </BrowserRouter>
        )
    }
}
