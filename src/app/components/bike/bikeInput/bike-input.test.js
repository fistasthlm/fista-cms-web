import React from 'react';
import { shallow } from 'enzyme';
import BikeInput from './bike-input';

const setup = propOverrides => {
    const props = Object.assign({
        handleChange: jest.fn(),
        value: '',
        placeholder: '',
        type: '',
        className: '',
        name: '',
    }, propOverrides);

    const wrapper = shallow(<BikeInput {...props} />);

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
});
