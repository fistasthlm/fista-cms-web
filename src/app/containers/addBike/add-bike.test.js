import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable';
import AddBike from './add-bike';

jest.mock('react-redux', () => ({
    connect: () => params => params,
}));

const setup = propOverrides => {
    const props = Object.assign({
        authenticated: true,
        user: Map(),
        addBike: jest.fn(),
    }, propOverrides);

    const wrapper = shallow(<AddBike {...props} />);

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

    it('should render bike form', () => {
        const { wrapper } = setup({
            user: Map({
                instagram: 'peteholmberg',
            })
        });

        expect(wrapper).toMatchSnapshot();
    });
});


describe('State', () => {
    it('should add bike', () => {
        const { wrapper } = setup();

        wrapper.instance().saveBike();

        expect(wrapper.instance().props.addBike).toHaveBeenCalled();
    });
});
