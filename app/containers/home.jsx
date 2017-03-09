import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
   render() {
      return(
         <div>

         </div>
      )
   }
}

function propProvider(reduxState) {
   const { appState, bikeState } = reduxState;

   return {
      appState,
      bikeState
   };
}
export default connect(propProvider)(Home);

