import React, { Component, PropTypes } from 'react';
import BikePhotos from './bike-photos';
import BikeSpecs from './bike-specs';

export default class BikeInfo extends Component {
   render() {
      const { bike } = this.props;
      const images = bike.get('images');
      return (
         <div className="bike">
               <div className="bike-title">
                  <h3>{bike.get('title')}</h3>
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
