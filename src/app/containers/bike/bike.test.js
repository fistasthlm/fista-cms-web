import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable';
import Bike from './bike';

jest.mock('react-router-dom', () => ({
    withRouter: params => params,
    Redirect: params => params,
}));

const setup = propOverrides => {
    const props = Object.assign({
        authenticated: true,
        bike: Map(),
        clearBike: jest.fn(),
        loadBike: jest.fn(),
        updateBike: jest.fn(),
        match: {
            params: {
                id: 'hej'
            }
        }
    }, propOverrides);

    return shallow(<Bike {...props} />);
};


describe('Render', () => {
    it('should render loader if empty bike', () => {
        const wrapper = setup();
        window.location.pathname = '/bike/123';

        expect(wrapper).toMatchSnapshot();
    });

    it('should render bike info if bike', () => {
        const wrapper = setup({
            bike: Map({
                title: 'dolan',
            })
        });
        window.location.pathname = '/bike/123';

        expect(wrapper).toMatchSnapshot();
    });

    it('should render redirect if unauthenticated', () => {
        const wrapper = setup({
            authenticated: false,
        });

        window.location.pathname = '/bike/123';

        expect(wrapper).toMatchSnapshot();
    });
});

describe('Life cycle', () => {
    describe('component will unmount', () => {
        it('should clear bike', () => {
            const wrapper = setup();

            wrapper.instance().componentWillUnmount();

            expect(wrapper.instance().props.clearBike).toHaveBeenCalled();
        });
    });
});
