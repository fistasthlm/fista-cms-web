import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from 'components/login/login-form';
import { authenticate } from 'actions';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    login(data, onUnauthorized) {
        this.props.dispatch(authenticate(data, onUnauthorized));
    }

    render() {
        return (
            <div>
                <LoginForm onLogin={this.login.bind(this)} />
            </div>
        );
    }
}

function propProvider(reduxState) {
    const {appState} = reduxState;

    return {
        appState
    };
}

export default connect(propProvider)(Login);
