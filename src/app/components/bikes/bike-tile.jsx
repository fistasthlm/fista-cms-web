import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { NavLink } from 'react-router-dom';
import Image from 'components/viewHelper/image/image';

export default function BikeTile({bike}) {
    const hasImage = bike.get('images').first();
    const previewImage = hasImage.toJS();
    return (
        <div className="bike-tile col-6 col-sm-4 col-md-4 col-lg-4">
            <NavLink to={'/bike/' + bike.get('_id')}>
                <div className="bike-title ellipsis">
                    {bike.get('title')}
                </div>
                {
                    hasImage &&
                    <Image className="bike-image" id="previewImage" url={previewImage.url} />
                }

            </NavLink>
        </div>
    );
}

BikeTile.propTypes = {
    bike: PropTypes.instanceOf(Map).isRequired
};
