import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BikeGrid from 'components/bikes/bike-grid/bike-grid';
import NoBikes from 'components/bikes/no-bikes/no-bikes';
import Loader from 'components/viewHelper/loader';
import { loadBikes, clearBike } from 'actions/bike-actions';

class Bikes extends Component {
    componentDidMount() {
        const { bikes, user } = this.props;

        if (!user.isEmpty() && bikes.isEmpty()) {
            this.props.loadBikes(user.get('instagram'));
        }
    }

    componentWillUnmount() {
        this.props.clearBike();
    }

    render() {
        const { authenticated, bikes, networkProgress } = this.props;
        if (!authenticated) {
            return (
                <Redirect to={{ pathname: '/login' }} />
            );
        }

        if (networkProgress) {
            return (
                <Loader />
            );
        }

        if (bikes.isEmpty()) {
            return (
                <NoBikes />
            );
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
        user: userState.get('user'),
        networkProgress: appState.get('networkProgress'),
    };
}

export default connect(propProvider, {
    loadBikes,
    clearBike,
})(Bikes);
