import React from 'react';
import { shallow } from 'enzyme';
import Image from './image';

const setup = propOverrides => {
    const props = Object.assign({
        url: 'https//placekitten.com/500/500',
    }, propOverrides);

    const wrapper = shallow(<Image {...props} />);

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
