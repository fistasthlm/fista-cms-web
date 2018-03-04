import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { NavLink } from 'react-router-dom';

export default function DesktopNavbar({ options }) {
    return (
        <div className="navbar">
            {
                options.get('links') && options.get('links').map((link, index) => {
                    return (
                        <NavLink
                            key={`${index}-${link.get('to')}`}
                            exact={true}
                            className="nav-item"
                            activeClassName="active"
                            to={link.get('to')}>
                            {link.get('route')}
                        </NavLink>
                    );
                })
            }
            {
                options.get('actions') && options.get('actions').map((action, index) => {
                    return (
                        <div
                            key={`${index}-${action.get('name')}`}
                            className="nav-item"
                            onClick={action.get('action')}>
                            {action.get('name')}
                        </div>
                    );
                })
            }
        </div>
    );
}

DesktopNavbar.propTypes = {
    options: ImmutablePropTypes.map.isRequired,
};
