import React from 'react';
import {shallow} from 'enzyme';
import {Map, List} from 'immutable';
import DesktopNavbar from './desktop-navbar';

const setup = propOverrides => {
    const props = Object.assign({
        options: Map(),
    }, propOverrides);

    const wrapper = shallow(<DesktopNavbar {...props} />);

    return {
        setup,
        wrapper
    };
};

describe('Render', () => {
    it('should render component', () => {
        const {wrapper} = setup();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render links', () => {
        const {wrapper} = setup({
            options: Map({
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
                actions: List([
                    Map({
                        action: jest.fn(),
                        name: 'Log out',
                    }),
                ]),
            }),
        });

        expect(wrapper).toMatchSnapshot();
    });
});
