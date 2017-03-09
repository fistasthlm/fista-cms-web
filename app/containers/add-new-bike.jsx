import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BikeForm from 'components/bike/bike-form';

class AddNewBike extends Component {
   saveBike() {

   }

   render() {
      return(
         <div>
            <BikeForm saveBike={this.saveBike}/>
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
export default connect(propProvider)(AddNewBike);

