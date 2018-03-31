import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BikeGrid from 'components/bikes/bike-grid/bike-grid';
import Loader from 'components/viewHelper/loader';
import { loadBikes } from 'actions/bike-actions';

class Bikes extends Component {
    componentDidMount() {
        this.getBikes(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.getBikes(nextProps);
        }
    }

    getBikes(props) {
        const { bikes, user } = props;

        if (!user.isEmpty() && bikes.isEmpty()) {
            props.loadBikes(user.get('instagram'));
        }
    }

    redirectToLogin() {
        const to = {
            pathname: '/login',
            state: { from: this.props.location }
        };

        return (
            <Redirect to={to} />
        );
    }

    render() {
        const { authenticated, bikes } = this.props;
        if (!authenticated) {
            return this.redirectToLogin();
        }

        if (bikes.isEmpty()) {
            return <Loader />;
        }
        else {
            return (
                <BikeGrid bikes={bikes} />
            );
        }
    }
}

function propProvider(reduxState) {
    const { appState, userState, bikeState } = reduxState;

    return {
        authenticated: appState.get('authenticated'),
        bikes: bikeState.get('bikes'),
        user: userState.get('user')
    };
}

export default connect(propProvider, {
    loadBikes
})(Bikes);
