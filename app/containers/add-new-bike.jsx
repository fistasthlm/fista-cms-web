import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BikeForm from 'components/bike/bike-form';

class AddNewBike extends Component {
   saveBike(data) {
      console.log(data);
   }

   render() {
      return(
         <div>
            <BikeForm
               onSubmit={this.saveBike}
               user={this.props.userState.get('user')} />
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
export default connect(propProvider)(AddNewBike);

