import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from 'components/nav/navbar';
import { logout } from '../actions';

class Nav extends Component {
   constructor(props) {
      super(props);

      this.state = {
         menuToggled: false,
      };

      this.onLogOut = this.onLogOut.bind(this);
   }

    onLogOut() {
        this.props.dispatch(logout());
    }

   render() {
      return (
         <Navbar
             onLogOut={this.onLogOut}
             authenticated={this.props.appState.get('authenticated')} />
      );
   }
}

function propProvider(state) {
    const { appState } = state;

    return {
        appState
    };
}

export default withRouter(connect(propProvider)(Nav));
