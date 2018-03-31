import React from 'react';
import PropTypes from 'prop-types';

export default function InstagramLink({ handle, className }) {
   const url = 'https://www.instagram.com/' + handle + '/';
   handle = '@' + handle;

   return (
      <a href={url}
         target="_blank"
         className={className}>
         {handle}
      </a>
   );
}

InstagramLink.propTypes = {
   handle: PropTypes.string.isRequired,
   className: PropTypes.string,
};
