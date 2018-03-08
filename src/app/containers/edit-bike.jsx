import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BikeForm from '../components/bike/bikeForm/bike-form';
import Loader from '../components/viewHelper/loader';
import { loadBike, updateBike } from '../actions/bike-actions';

class EditBike extends Component {
    componentDidMount() {
        this.loadBike();
    }

    loadBike() {
        const {dispatch} = this.props;
        const id = window.location.hash.split('/')[2].split('?')[0];
        dispatch(loadBike(id));
    }

    saveBike(data) {
        this.props.dispatch(updateBike(data));
    }

    render() {
        const user = this.props.userState.get('user');
        const bike = this.props.bikeState.get('bike');

        if (!this.props.appState.get('authenticated')) {
            return (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: this.props.location}
                    }} />
            );
        }

        return (
            <div>
                {
                    user && bike && bike.size > 0 ?
                            <div>
                                <h1>Edit {bike.get('title')}</h1>
                                <BikeForm onSubmit={this.saveBike.bind(this)} user={user} bike={bike} />
                            </div>
                        :
                            <Loader />
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

export default connect(propProvider)(EditBike);
