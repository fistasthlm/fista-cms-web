import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Loader from 'components/viewHelper/loader';
import EditBikeForm from 'components/bike/edit-bike-form/edit-bike-form';
import { loadBike, clearBike, updateBike } from 'actions/bike-actions';

class Bike extends PureComponent {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.loadBike();
    }

    componentWillUnmount() {
        this.props.clearBike();
    }

    loadBike() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.loadBike(id);
        }
    }

    submit(data) {
        this.props.updateBike(data);
    }

    render() {
        const { authenticated, bike } = this.props;
        if (!authenticated) {
            return (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: this.props.location }
                    }} />
            );
        }

        return (
            !bike.isEmpty() ?
                <div className="edit-bike">
                    <h1>Edit {bike.get('title')}</h1>
                    <EditBikeForm
                        bike={bike}
                        submit={this.submit}
                    />
                </div>
                :
                    <Loader />
        );
    }
}

function propProvider(state) {
    const { appState, bikeState } = state;

    return {
        authenticated: appState.get('authenticated'),
        bike: bikeState.get('bike'),
    };
}

export default withRouter(connect(propProvider, {
    loadBike,
    clearBike,
    updateBike,
})(Bike));

