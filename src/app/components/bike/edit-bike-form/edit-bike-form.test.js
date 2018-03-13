import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable';
import EditBikeForm from './edit-bike-form';

const setup = () => {
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
        })
    });
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
});
