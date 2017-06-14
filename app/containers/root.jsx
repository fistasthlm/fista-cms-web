import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from 'actions';
import { loadUser } from 'actions/user-actions';

class Root extends Component {
   constructor(props) {
      super(props);
   }

   onLogOut() {
      const { dispatch } = this.props;
      dispatch(logout());
   }

   componentWillMount() {
      this.loadUser();
   }

   componentWillReceiveProps(nextProps) {
      this.loadUser();
   }

   loadUser() {
      if (this.props.userState.isEmpty()) {
         this.props.dispatch(loadUser());
      }
   }

   render() {
      return(
         <div className="content-container">
            <Nav onLogOut={this.onLogOut.bind(this)}
                 authenticated={this.props.appState.get('authenticated')} />
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
   const { appState, userState } = reduxState;

   return {
      appState,
      userState
   };
}

export default connect(propProvider)(Root);
