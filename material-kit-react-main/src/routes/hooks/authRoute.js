// AuthRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
 
// eslint-disable-next-line react/prop-types
const AuthRoute = ({ component: any, ...rest }) => {
    const {token} = useSelector((state) => state.auth);
    const isAuthenticated = !!localStorage.getItem('token') || token;

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default AuthRoute;
