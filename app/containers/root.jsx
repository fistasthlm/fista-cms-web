import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from 'actions';

class Root extends Component {
   constructor(props) {
      super(props);
   }

   onLogOut() {
      const { dispatch } = this.props;
      dispatch(logout());
   }

   render() {
      return(
         <div className="content-container">
            <Nav onLogOut={this.onLogOut.bind(this)} authenticated={this.props.appState.get('authenticated')} />
            <div className="divider" />
            <div className="page-content">
               {this.props.children}
            </div>
         </div>
      );
   }
}

Root.propTypes = {
   dispatch: PropTypes.func.isRequired,
   appState: PropTypes.object.isRequired
};

function propProvider(reduxState, props) {
   const {appState} = reduxState;

   return {
      appState
   };
}

export default connect(propProvider)(Root);
