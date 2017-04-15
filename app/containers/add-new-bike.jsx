import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BikeForm from 'components/bike/bike-form';

class AddNewBike extends Component {
   saveBike(data) {
      console.log(data);
   }

   render() {
      const user = this.props.userState.get('user');
      return(
         <div>
            {
               user &&
                  <BikeForm
                     onSubmit={this.saveBike}
                     user={user} />
            }
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

