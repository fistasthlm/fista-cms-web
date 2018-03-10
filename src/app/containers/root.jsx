import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from 'containers/nav';
import Home from 'containers/home';
import AddBike from 'containers/addBike/add-bike';
import EditBike from 'containers/edit-bike';
import Bikes from 'containers/bikes/bikes';
import Bike from 'containers/bike';
import Login from 'containers/login';
import { getAuthToken } from 'utils/session';
import { loadUser } from '../actions/user-actions';

class Root extends Component {
    componentDidMount() {
        const { userState } = this.props;
        const authToken = getAuthToken();

        if (authToken && userState.get('user').isEmpty()) {
            this.props.dispatch(loadUser());
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
                            component={Home} />
                        <Route
                            exact path="/add"
                            component={AddBike} />
                        <Route
                            exact path="/edit/:id"
                            component={EditBike} />
                        <Route
                            exact path="/bikes"
                            component={Bikes} />
                        <Route
                            exact path="/bike/:id"
                            component={Bike} />
                        <Route
                            exact path="/login"
                            component={Login} />
                    </Switch>
                </div>
            </div>
        );
    }
}

function propProvider(state) {
    const { appState, userState } = state;

    return {
        appState,
        userState,
    };
}

export default withRouter(connect(propProvider)(Root));
