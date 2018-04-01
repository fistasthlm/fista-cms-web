import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BikeForm from 'components/bike/bike-form/bike-form';
import { addBike } from 'actions/bike-actions';

class AddBike extends PureComponent {
    constructor(props) {
        super(props);

        this.saveBike = this.saveBike.bind(this);
    }

    saveBike(data) {
        this.props.addBike(data);
    }

    render() {
        const { user, authenticated } = this.props;

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
            <div className="add-bike">
                {
                    !user.isEmpty() &&
                        <div>
                            <h1>New biek day</h1>
                            <p className="add-bike__preamble">
                                fira mit ein vätska! En titel och minst en bild är kravet.
                            </p>
                            <BikeForm
                                onSubmit={this.saveBike}
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
        authenticated: appState.get('authenticated'),
        user: userState.get('user'),
    };
}

export default connect(propProvider, {
    addBike,
})(AddBike);
