import React from 'react';
import PropTypes from 'prop-types';

export default function Loader({ className }){
   return (
      <div className={'loader' + (className ? ' ' + className : '')} />
   );
}

Loader.propTypes = {
    className: PropTypes.string,
};
