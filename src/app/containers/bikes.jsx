import React, { Component } from 'react';
import { connect } from 'react-redux';
import BikeGrid from 'components/bikes/bike-grid';
import { loadBikes } from 'actions/bike-actions';

class Bikes extends Component {
    componentDidMount() {
        this.getBikes();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.getBikes();
        }
    }

    getBikes() {
        const {dispatch, bikeState, userState} = this.props;
        const user = userState.get('user');
        const bikes = bikeState.get('bikes');
        if (user && !bikes) {
            dispatch(loadBikes(user.get('instagram')));
        }
    }

    render() {
        const bikes = this.props.bikeState.get('bikes');

        return (
            <div>
                {
                    bikes &&
                    <BikeGrid bikes={bikes} />
                }
            </div>
        );
    }
}

function propProvider(reduxState) {
    const {appState, userState, bikeState} = reduxState;

    return {
        appState,
        userState,
        bikeState
    };
}

export default connect(propProvider)(Bikes);
