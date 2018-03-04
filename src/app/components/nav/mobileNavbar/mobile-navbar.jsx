import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class MobileNavbar extends PureComponent {
    constructor(props) {
        super(props);

        this.executeAction = this.executeAction.bind(this);
    }

    executeAction(action) {
        action();
        this.props.toggleMenu();
    }

    render() {
        const { hamburgerMenuStyle, options, toggleMenu } = this.props;
        return (
            <div className={hamburgerMenuStyle}>
                {
                    options.get('links') && options.get('links').map((link, index) => {
                        return (
                            <div
                                key={`${index}-${link.get('to')}`}
                                className="menu-item">
                                <NavLink
                                    exact={true}
                                    className="nav-item"
                                    activeClassName="active"
                                    onClick={toggleMenu}
                                    to={link.get('to')}>
                                    {link.get('route')}
                                </NavLink>
                            </div>
                        );
                    })
                }
                {
                    options.get('actions') && options.get('actions').map((action, index) => {
                        return (
                            <div
                                key={`${index}-${action.get('route')}`}
                                className="menu-item">
                                <div
                                    className="nav-item"
                                    onClick={this.executeAction(action.get('action'))}>
                                    {action.get('name')}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

MobileNavbar.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    options: ImmutablePropTypes.map.isRequired,
    hamburgerMenuStyle: PropTypes.string.isRequired,
};
