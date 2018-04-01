import React from 'react';
import { Link } from 'react-router-dom';

export default function NoBikes() {
    return (
        <div className="no-bikes">
            <h1>
                No bikes
            </h1>
            <span>
                add one for samlags  skull
            </span>
            <Link
                className="no-bikes__link"
                to={{ pathname: '/add'}}>
                Add bieek
            </Link>
        </div>
    );
}
