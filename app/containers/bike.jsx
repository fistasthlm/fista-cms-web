import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/viewHelper/loader';
import BikeInfo from '../components/bikes/bike-info';
import { loadBike, clearBike } from '../actions/bike-actions';

class Bike extends Component {
   componentDidMount() {
      this.loadBike();
   }

   componentWillUnmount() {
      this.props.dispatch(clearBike());
   }

   loadBike() {
      const {dispatch} = this.props;
      const id = window.location.hash.split('/')[2].split('?')[0];
      dispatch(loadBike(id));
   }

   render() {
      const { bikeState } = this.props;
      const bike = bikeState.get('bike');

      return (
         bike ?
            <BikeInfo bike={bike} />
            :
            <Loader />
      );
   }
}

function propProvider(reduxState) {
   const { appState, bikeState } = reduxState;

   return {
      appState,
      bikeState
   };
}

export default connect(propProvider)(Bike);

