import React from 'react';
import PropTypes from 'prop-types';

export default function PropertyItem({ property, value }) {
    return (
        <div className="property-item">
            <div className="property-item__property">
                {property}
            </div>
            <div className="property-item__value">
                {value}
            </div>
        </div>
    );
}

PropertyItem.propTypes = {
    property: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};
