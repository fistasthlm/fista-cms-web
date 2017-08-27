import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import BikeTile from 'components/bikes/bike-tile';

export default function BikeGrid ({ bikes }) {
   return (
      <div>
         <h1>My bikes</h1>
         <div className="bike-grid row gutter-0">
            {
               bikes && bikes.size > 0 &&
                  bikes.map((bike, index) => {
                     return <BikeTile bike={bike} key={index} />
                  })
            }
         </div>
      </div>
   );
}

BikeGrid.propTypes = {
   bikes: PropTypes.instanceOf(List).isRequired
};
