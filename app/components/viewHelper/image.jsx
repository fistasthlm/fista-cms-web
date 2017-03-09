import React, { Component, PropTypes } from 'react';

export default class Image extends Component {
   render() {
      const { url, className, width, height, resize, caption } = this.props;

      const src = resize ? url + '?w=' + width + '&h=' + height :  url;

      return(
         <img className={className} src={src} alt={caption || ''} />
      );
   }
}

Image.propTypes = {
   url: PropTypes.string.isRequired,
   caption: PropTypes.string,
   className: PropTypes.string,
   width: PropTypes.string,
   height: PropTypes.string,
   resize: PropTypes.bool
};
