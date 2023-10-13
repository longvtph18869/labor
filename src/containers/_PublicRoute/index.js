import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';

export class PublicRoute extends React.Component {
    render() {
        let redirect = null;
        return (
            <Route
                {...this.props}
                render={props =>
                    !redirect ? <Component {...props} /> : <Redirect to={redirect}/>
                }
            />
        );
    }
}

export default PublicRoute;
