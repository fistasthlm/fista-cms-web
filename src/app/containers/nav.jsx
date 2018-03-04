import React, { Component } from 'react';
import { connect } from 'react-redux';
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
             authenticated={this.props.userState.get('authenticated')} />
      );
   }
}

function propProvider(state) {
    const { userState } = state;

    return {
        userState
    };
}

export default connect(propProvider)(Nav);
