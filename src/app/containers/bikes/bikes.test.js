import React from 'react';
import { shallow } from 'enzyme';
import { Map, List } from 'immutable';
import Bikes from './bikes';

const setup = propOverrides => {
    const props = Object.assign({
        user: Map(),
        bikes: List(),
        authenticated: false,
        networkProgress: false,
        loadBikes: jest.fn(),
        clearBike: jest.fn(),
    }, propOverrides);

    return shallow(<Bikes {...props} />);
};

describe('Render', () => {
    it('should render redirect when not authenticated', () => {
        const wrapper = setup();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component', () => {
        const wrapper = setup({
            authenticated: true,
            bikes: List([
                Map({
                    title: 'dolan'
                })
            ])
        });

        expect(wrapper).toMatchSnapshot();
    });

    it('should render loader if network progress', () => {
        const wrapper = setup({
            authenticated: true,
            networkProgress: true,
        });

        expect(wrapper).toMatchSnapshot();
    });

    it('should render no bikes', () => {
        const wrapper = setup({
            authenticated: true,
        });

        expect(wrapper).toMatchSnapshot();
    });
});

describe('Life cycle', () => {
    describe('component did mount', () => {
        it('should load bikes', () => {
            const wrapper = setup({
                user: Map({
                    instagram: 'test',
                })
            });

            wrapper.instance().componentDidMount();

            expect(wrapper.instance().props.loadBikes).toHaveBeenCalledWith('test');
        });
    });

    describe('component will unmount', () => {
        it('should clear bike', () => {
            const wrapper = setup();

            wrapper.instance().componentWillUnmount();

            expect(wrapper.instance().props.clearBike).toHaveBeenCalled();
        });
    });
});
