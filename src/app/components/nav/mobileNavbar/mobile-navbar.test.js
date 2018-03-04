import React from 'react';
import { shallow } from 'enzyme';
import { Map, List } from 'immutable';
import MobileNavbar from './mobile-navbar';

const setup = propOverrides => {
    const props = Object.assign({
        links: List(),
        toggleMenu: jest.fn(),
    }, propOverrides);

    const wrapper = shallow(<MobileNavbar {...props} />);

    return {
        setup,
        wrapper,
    };
};


describe('Render', () => {
    it('should render component', () => {
        const { wrapper } = setup();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render links', () => {
        const { wrapper } = setup({
            links: List([
                Map({
                    to: '/',
                    route: 'Home',
                }),
                Map({
                    to: '/bikes',
                    route: 'Bikes'
                })
            ])
        });

        expect(wrapper).toMatchSnapshot();
    });
});
