import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import PropertyItem from '../property-item/property-item';

export default function BikeSpecs({ bike }) {
    return (
        <div className="bike-specs">
            <h2>Specifications</h2>
            <div className="bike-specs__property-group">
                {
                    bike.get('frame') &&
                        <PropertyItem
                            property="Frame"
                            value={bike.get('frame')} />
                }
                {
                    bike.get('fork') &&
                        <PropertyItem
                            property="Fork"
                            value={bike.get('fork')} />
                }
                {
                    bike.get('cranks') &&
                        <PropertyItem
                            property="Cranks"
                            value={bike.get('cranks')} />
                }
                {
                    bike.get('drivetrain') &&
                        <PropertyItem
                            property="Drivetrain"
                            value={bike.get('drivetrain')} />
                }
                {
                    bike.get('handlebars') &&
                        <PropertyItem
                            property="Handlebars/Stem"
                            value={bike.get('handlebars')} />
                }
                {
                    bike.get('pedals') &&
                        <PropertyItem
                            property="Pedals"
                            value={bike.get('pedals')} />
                }
                {
                    bike.get('saddle') &&
                        <PropertyItem
                            property="Saddle/Seatpost"
                            value={bike.get('saddle')} />
                }
                {
                    bike.get('frontWheel') &&
                        <PropertyItem
                            property="Front wheel"
                            value={bike.get('frontWheel')} />
                }
                {
                    bike.get('rearWheel') &&
                        <PropertyItem
                            property="Rear wheel"
                            value={bike.get('rearWheel')} />
                }
            </div>
        </div>
    );
}

BikeSpecs.propTypes = {
    bike: PropTypes.instanceOf(Map).isRequired
};
