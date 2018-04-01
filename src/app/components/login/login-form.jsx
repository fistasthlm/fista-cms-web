import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loginFailed: false
        };
    }

    login(event) {
        event.preventDefault();

        const form = event.target;
        const encoded = btoa(form.username.value + ':' + form.password.value);
        const data = {
            username: form.username.value,
            password: encoded
        };

        this.props.onLogin(data, this.onLoginFailed());
    }

    onLoginFailed() {
        this.setState({
            loginFailed: true
        });
    }

    handleUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={(event) => this.login(event)}>
                <div className="login-form__form-group">
                    <input type="text"
                           name="username"
                           className="login-form__input"
                           onChange={(e) => this.handleUsername(e)}
                           placeholder="Username"
                           autoCapitalize="false"
                           spellCheck="false"
                    />
                </div>
                <div className="login-form__form-group">
                    <input type="password"
                           name="password"
                           className="login-form__input"
                           onChange={(e) => this.handlePassword(e)}
                           placeholder="Password" />
                </div>
                <button
                    type="submit"
                    className="login-form__submit">
                    Login
                </button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired
};
