import React from 'react';
import { shallow } from 'enzyme';
import { Map, List } from 'immutable';
import BikeTile from './bike-tile';

const setup = propOverrides => {
    const props = Object.assign({
        bike: Map({
            images: List(),
            instagram: 'pete',
        }),
    }, propOverrides);

    return shallow(<BikeTile {...props} />);
};

describe('Render', () => {
    it('should render component', () => {
        const wrapper = setup();

        expect(wrapper).toMatchSnapshot();
    });
});
