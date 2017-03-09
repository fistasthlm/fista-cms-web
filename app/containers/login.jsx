import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from 'components/login/login-form';

class Login extends Component {
   render() {
      return (
         <div>
            <LoginForm />
         </div>
      );
   }
}

function propProvider(reduxState) {
   const { appState, bikeState } = reduxState;

   return {
      appState,
      bikeState
   };
}

export default connect(propProvider)(Login)
