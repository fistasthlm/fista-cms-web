import React, { Component } from 'react';
import { connect } from 'react-redux';
import BikeForm from '../components/bike/bike-form';
import { addBike } from 'actions/bike-actions';

class AddBike extends Component {
   constructor(props) {
      super(props);
   }

   saveBike(data) {
      this.props.dispatch(addBike(data));
   }

   render() {
      const user = this.props.userState.get('user');
      return(
         <div>
            {
               user &&
                  <BikeForm
                     onSubmit={this.saveBike.bind(this)}
                     user={user} />
            }
         </div>
      )
   }
}

function propProvider(reduxState, props) {
   const { appState, userState } = reduxState;

   return {
      appState,
      userState
   };
}
export default connect(propProvider)(AddBike);
