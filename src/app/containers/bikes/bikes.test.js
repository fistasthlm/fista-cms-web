import React from 'react';
import { shallow } from 'enzyme';
import { Map, List } from 'immutable';
import Bikes from './bikes';

const setup = propOverrides => {
    const props = Object.assign({
        user: Map(),
        bikes: List(),
        authenticated: false,
        loadBikes: jest.fn(),
    }, propOverrides);

    const wrapper = shallow(<Bikes {...props} />);

    return {
        props,
        wrapper
    };
};

describe('Render', () => {
    it('should render redirect when not authenticated', () => {
        const { wrapper } = setup();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component', () => {
        const { wrapper } = setup({
            authenticated: true,
            bikes: List([
                Map({
                    title: 'dolan'
                })
            ])
        });

        expect(wrapper).toMatchSnapshot();
    });

    it('should render loader if no bikes', () => {
        const { wrapper } = setup({
            authenticated: true,
        });

        expect(wrapper).toMatchSnapshot();
    });
});

describe('State', () => {
    it('should get bikes', () => {
        const { wrapper, props } = setup({
            user: Map({
                instagram: 'pete'
            }),
        });

        wrapper.instance().getBikes(props);

        expect(wrapper.instance().props.loadBikes).toHaveBeenCalled();
    });
});


describe('Life cycle', () => {
    describe('component will receive props', () => {
        it('should load bikes if new props', () => {
            const { wrapper } = setup({
                bikes: List([
                    Map({
                        title: 'dolan'
                    }),
                ]),
                user: Map({
                    instagram: 'pete'
                }),
            });

            const { props } = setup({
                bikes: List(),
                user: Map({
                    instagram: 'pete'
                }),
            });

            wrapper.instance().getBikes = jest.fn();

            wrapper.instance().componentWillReceiveProps(props);

            expect(wrapper.instance().getBikes).toHaveBeenCalled();
        });
    });
});
