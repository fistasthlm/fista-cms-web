import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import InstagramLink from 'components/viewHelper/instagram-link';
import Image from 'components/viewHelper/image/image';

export default function BikeTile({bike}) {
    const hasImage = bike.get('images').first();

    return (
        <div className="bike-tile">
            <Link to={`/bike/${bike.get('_id')}`}>
                <div className="bike-tile__image">
                    {
                        hasImage &&
                        <Image
                            url={hasImage.get('url')}
                            className="bike-tile__picture"
                            resize={true}
                            width="500"
                            caption={bike.get('title')} />
                    }

                </div>
                <h2 className="bike-tile__title ellipsis">
                    {bike.get('title')}
                </h2>
            </Link>
            <InstagramLink
                handle={bike.get('instagram')}
                className="bike-tile__instagram-link" />
        </div>
    );
}

BikeTile.propTypes = {
    bike: PropTypes.instanceOf(Map).isRequired
};
