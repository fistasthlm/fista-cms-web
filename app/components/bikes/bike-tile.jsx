import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';
import { Link } from 'react-router';
import Image from 'components/viewHelper/image';

export default class BikeTile extends Component {
   render() {
      const { bike } = this.props;
      const previewImage = bike.get('images').first().toJS();
      return (
         <div className="bike-tile col-6 col-sm-4 col-md-4 col-lg-4">
            <Link to={'/bike/' + bike.get('_id')}>
               <div className="bike-title ellipsis">
                  {bike.get('title')}
               </div>
               <Image className="bike-image" id="previewImage" url={previewImage.url} />
            </Link>
         </div>
      )
   }
}

BikeTile.propTypes = {
   bike: PropTypes.instanceOf(Map).isRequired
};
