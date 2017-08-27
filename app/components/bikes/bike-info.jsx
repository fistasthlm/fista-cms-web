import React from 'react';
import PropTypes from 'prop-types';
import BikePhotos from './bike-photos';
import BikeSpecs from './bike-specs';
import { Link } from 'react-router';

export default function BikeInfo({ bike }) {
   const images = bike.get('images');
   return (
      <div className="bike">
            <div className="bike-title">
               <h1>{bike.get('title')}</h1>
               <Link to={`/edit/${bike.get('_id')}`}>Edit</Link>
            </div>
            <BikePhotos images={images} />
            <BikeSpecs bike={bike} />
      </div>
   );
}

BikeInfo.propTypes = {
   bike: PropTypes.object.isRequired
};
