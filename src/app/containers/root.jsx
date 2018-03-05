import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from 'containers/nav';
import Home from 'containers/home';
import AddBike from 'containers/add-bike';
import EditBike from 'containers/edit-bike';
import Bikes from 'containers/bikes';
import Bike from 'containers/bike';
import Login from 'containers/login';
import { getAuthToken } from 'utils/session';

class Root extends Component {
    requireAuth(nextState, replace) {
        if (!getAuthToken()) {
            window.location = '/login';
        }
    }

    noAuth(nextState, replace) {
        if (getAuthToken()) {
            replace({pathname: '/'});
        }
    }

    render() {
        return (
            <div className="content-container">
                <Nav />
                <div className="divider" />
                <div className="page-content">
                    <Switch>
                        <Route
                            exact path="/"
                            component={Home}
                            onEnter={this.requireAuth} />
                        <Route
                            exact path="/add"
                            component={AddBike}
                            onEnter={this.requireAuth} />
                        <Route
                            exact path="/edit/:id"
                            component={EditBike}
                            onEnter={this.requireAuth} />
                        <Route
                            exact path="/bikes"
                            component={Bikes}
                            onEnter={this.requireAuth} />
                        <Route
                            exact path="/bike/:id"
                            component={Bike}
                            onEnter={this.requireAuth} />
                        <Route
                            exact path="/login"
                            component={Login}
                            onEnter={this.noAuth} />
                    </Switch>
                </div>
            </div>
        );
    }
}

function propProvider(reduxState) {
    const {appState, userState} = reduxState;

    return {
        appState,
        userState
    };
}

export default withRouter(connect(propProvider)(Root));
