import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';
import BikeTile from 'components/bikes/bike-tile/bike-tile';

export default function BikeGrid({bikes}) {
    return (
        <div className="bike-grid">
            {
                bikes.size > 0 &&
                bikes.map(bike => {
                    return (
                        <BikeTile
                            key={bike.get('_id')}
                            bike={bike} />
                    );
                })
            }
        </div>
    );
}

BikeGrid.propTypes = {
    bikes: PropTypes.instanceOf(List).isRequired,
};
