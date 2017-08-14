import React, { Component, PropTypes } from 'react';
import BikePhotos from './bike-photos';
import BikeSpecs from './bike-specs';
import { Link } from 'react-router';

export default class BikeInfo extends Component {
   render() {
      const { bike } = this.props;
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
}

BikeInfo.propTypes = {
   bike: PropTypes.object.isRequired
};
