import React from 'react'
import { Redirect } from 'react-router-dom';

/* Services */
import { getItem } from "../../services/localstorage";

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = getItem('authToken');

        return isAuthenticated ? (
            <Component />
        ) : (
                <Redirect to={{ pathname: '/login' }} />
            );
    }
}

export default ProtectedRoute;