import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BikeForm from 'components/bike/bike-form';
import { addBike } from 'actions/bike-actions';

class AddBike extends PureComponent {
    saveBike(data) {
        this.props.dispatch(addBike(data));
    }

    render() {
        const user = this.props.userState.get('user');

        if (!this.props.appState.get('authenticated')) {
            return (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: this.props.location }
                    }} />
            );
        }

        return (
            <div>
                {
                    user &&
                        <div className="add-bike">
                            <h1>New biek day</h1>
                            <p>fira mit ein vätska</p>
                            <BikeForm
                                onSubmit={this.saveBike.bind(this)}
                                user={user} />
                        </div>
                }
            </div>
        );
    }
}

function propProvider(reduxState) {
    const { appState, userState } = reduxState;

    return {
        appState,
        userState
    };
}

export default connect(propProvider)(AddBike);
