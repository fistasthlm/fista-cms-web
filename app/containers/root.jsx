import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Nav from './nav';

class Root extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return(
         <div className="content-container">
            <Nav />
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
