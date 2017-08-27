import React from 'react';
import PropTypes from 'prop-types';

export default function Image({url, caption, className, width, height, resize }) {
   const src = resize ? url + '?w=' + width + '&h=' + height :  url;

   return(
      <img className={className} src={src} alt={caption || ''} />
   );
}

Image.propTypes = {
   url: PropTypes.string.isRequired,
   caption: PropTypes.string,
   className: PropTypes.string,
   width: PropTypes.string,
   height: PropTypes.string,
   resize: PropTypes.bool
};
