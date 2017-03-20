import React, { Component, PropTypes } from 'react';
import Navbar from 'components/nav/navbar';

export default class Nav extends Component {
   constructor(props) {
      super(props);

      this.state = {
         menuToggled: false,
      };
   }

   render() {
      return (
         <Navbar onLogOut={this.props.onLogOut} authenticated={this.props.authenticated} />
      );
   }
}

Nav.propTypes = {
   onLogOut: PropTypes.func.isRequired,
   authenticated: PropTypes.bool.isRequired
};