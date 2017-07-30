import React, { Component, PropTypes } from 'react';

export default class Loader extends Component {
    render() {
        return (
            <div className={'loader' + (this.props.className ? ' ' + this.props.className : '')} />
        );
    }
}

Loader.propTypes = {
    className: PropTypes.string,
};
