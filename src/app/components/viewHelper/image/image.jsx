import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ url, className, width, height, resize, caption }) {
    const src = resize ?
            url + '?w=' + width + '&h=' + height
        :
            url;

    if (resize) {
        const transformUrl = `https://process.filestackapi.com/A3BcPUqFURlSDHWjF3UG1z/resize=width:${width}/${url}`;
        return (
            <img
                className={className}
                src={transformUrl}
                alt={caption || ''}
                width={width}
                height={height} />
        );
    }

    return (
        <img
            className={className}
            src={src}
            alt={caption || ''} />
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
