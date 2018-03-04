import React from 'react';
import { shallow } from 'enzyme';
import { Map, List } from 'immutable';
import DesktopNavbar from './desktop-navbar';

const setup = propOverrides => {
    const props = Object.assign({
        links: List(),
    }, propOverrides);

    const wrapper = shallow(<DesktopNavbar {...props} />);

    return {
        setup,
        wrapper
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
                    route: 'Bikes',
                }),
            ]),
        });

        expect(wrapper).toMatchSnapshot();
    });
});
