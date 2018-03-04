import React from 'react';
import PropTypes from 'prop-types';

export default function Hamburger({ toggleMenu }) {
    return (
        <div className="hamburger-button">
            <button
                id="navbar-toggle-btn-left"
                className="toggle-button"
                onClick={toggleMenu}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </div>
    );
}

Hamburger.propTypes = {
    toggleMenu: PropTypes.func.isRequired
};
