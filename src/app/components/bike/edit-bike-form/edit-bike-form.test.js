import React from 'react';
import { shallow } from 'enzyme';
import { List, Map } from 'immutable';
import EditBikeForm from './edit-bike-form';

const setup = propOverrides => {
    const props = Object.assign({
        bike: Map({
            title: 'dolan',
            frame: 'dolan',
            fork: 'alpina',
            cranks: 'dura ace',
            pedals: 'time',
            drivetrain: 'kmc',
            handlebars: 'easton',
            saddle: 'slr',
            frontWheel: 'halo',
            rearWheel: 'halo',
            images: [],
            instagram: 'fistasthlm',
        }),
        submit: jest.fn(),
    }, propOverrides);

    return shallow(<EditBikeForm {...props} />);
};

describe('Render', () => {
    it('should render component', () => {
        const wrapper = setup();

        expect(wrapper).toMatchSnapshot();
    });
});


describe('State', () => {
    it('should handle changes', () => {
        const wrapper = setup();

        const mockEvent = {
            target: {
                name: 'test',
                value: 'testvalue'
            }
        };

        wrapper.instance().handleChange(mockEvent);

        expect(wrapper.state().test).toEqual('testvalue');
    });

    it('should handle submit', () => {
        const wrapper = setup();
        const mockEvent = { preventDefault: jest.fn() };
        wrapper.instance().setState({ title: 'dolan pre cursa' });

        wrapper.instance().handleSubmit(mockEvent);

        expect(wrapper.instance().props.submit).toHaveBeenCalled();
    });

    describe('form is valid', () => {
        it('should be true if difference between props and state', () => {
            const wrapper = setup();

            wrapper.instance().setState({ title: 'dolan pre cursa' });

            expect(wrapper.instance().formValid()).toEqual(true);
        });

        it('should be false if props and state are the same', () => {
            const wrapper = setup();

            expect(wrapper.instance().formValid()).toEqual(false);
        });
    });
});
