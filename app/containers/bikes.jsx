import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BikeGrid from 'components/bikes/bike-grid';
import { loadBikes } from 'actions/bike-actions';

class Bikes extends Component {
   componentDidMount() {
      this.getBikes();
   }

   componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps) {
         this.getBikes();
      }
   }

   getBikes() {
      const { dispatch, bikeState, userState } = this.props;
      const user = userState.get('user');
      const bikes = bikeState.get('bikes');
      console.log(user);
      console.log(bikes);
      if (user && bikes.length === 0) {
         dispatch(loadBikes(user.get('instagram')));
      }
   }

   render() {
      return (
         <div>
            <BikeGrid />
         </div>
      )
   }
}

function propProvider(reduxState, props) {
   const { appState, userState, bikeState } = reduxState;

   return {
      appState,
      userState,
      bikeState
   };
}

export default connect(propProvider)(Bikes);
