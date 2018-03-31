import React from 'react';
import { shallow } from 'enzyme';
import Hamburger from './hamburger';

const setup = () => {
    const props = {
        toggleMenu: jest.fn(),
    };

    return shallow(<Hamburger {...props} />);
};

describe('Render', () => {
    it('should render component', () => {
        const wrapper = setup();

        expect(wrapper).toMatchSnapshot();
    });
});
