import React from 'react';
import { shallow } from 'enzyme';
import NoBikes from './no-bikes';

const setup = () => {
    return shallow(<NoBikes />);
};

describe('Render', () => {
    it('should render components', () => {
        const wrapper = setup();

        expect(wrapper).toMatchSnapshot();
    });
});
