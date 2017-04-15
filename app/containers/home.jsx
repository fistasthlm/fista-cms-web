import React, { Component } from 'react';
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
   const { appState, userState } = reduxState;

   return {
      appState,
      userState
   };
}
export default connect(propProvider)(Home);

