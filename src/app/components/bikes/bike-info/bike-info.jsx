import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import BikePhotos from 'components/bikes/bike-photos/bike-photos';
import BikeSpecs from 'components/bikes/bike-specs/bike-specs';
import InstagramLink from 'components/viewHelper/instagram-link';

export default function BikeInfo({ bike }) {
    const images = bike.get('images');
    return (
        <div className="bike-info">
            <div className="bike-info__title">
                <h1>
                    {bike.get('title')}
                </h1>
            </div>
            <InstagramLink
                handle={bike.get('instagram')}
                className="bike-info__instagram" />
            {
                images &&
                    <BikePhotos images={images} />
            }
            <BikeSpecs bike={bike} />
        </div>
    );
}

BikeInfo.propTypes = {
    bike: PropTypes.instanceOf(Map).isRequired
};
