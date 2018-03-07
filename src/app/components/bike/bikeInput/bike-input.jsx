import React from 'react';
import PropTypes from 'prop-types';

function BikeInput({ handleChange, value, placeholder, type, className }) {
    const style = `add-bike-input ${className ? className : ''}`;

    return (
        <input
            type={type}
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
            className={style} />
    );
}

BikeInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default BikeInput;
