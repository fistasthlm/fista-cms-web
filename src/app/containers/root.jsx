import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from 'containers/nav';
import Home from 'containers/home';
import AddBike from 'containers/add-bike';
import EditBike from 'containers/edit-bike';
import Bikes from 'containers/bikes';
import Bike from 'containers/bike';
import Login from 'containers/login';

class Root extends Component {
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

export default withRouter(Root);
