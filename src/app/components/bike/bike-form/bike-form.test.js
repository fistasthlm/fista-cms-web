import React from 'react';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';
import BikeForm from './bike-form';

jest.mock('utils/history', () => ({
    push: params => params,
}));

const setup = propOverrides => {
    const props = Object.assign({
        user: Map({
            instagram: 'peteholmberg'
        }),
        onSubmit: jest.fn(),
    }, propOverrides);

    return shallow(<BikeForm {...props} />);
};

describe('Render', () => {
    it('should render component', () => {
        const wrapper = setup();

        expect(wrapper).toMatchSnapshot();
    });
});

describe('State', () => {
    it('should handle text input change', () => {
        const wrapper = setup();
        const mockEvent = {
            target: {
                name: 'title',
                value: 'dolan',
            },
        };

        wrapper.instance().handleTextInputChange(mockEvent);

        expect(wrapper.state().title).toEqual('dolan');
    });

    it('handle upload image result', () => {
        const wrapper = setup();

        const mockEvent = {
            filesUploaded: [
                {
                    url: 'hej.com',
                    filename: 'dolan.png'
                }
            ]
        };

        wrapper.instance().handleUploadImageResult(mockEvent);

        expect(wrapper.state().images).toEqual(fromJS(
            [
                {
                    url: 'hej.com',
                    name: 'dolan.png'
                }
            ]
        ));
    });

    it('should submit', () => {
        const wrapper = setup();
        wrapper.state().title = 'dolan';
        wrapper.state().images = [{ url: 'dolan.com', name: 'dolan.png' }];
        const mockEvent = {
            preventDefault: jest.fn(),
        };

        wrapper.instance().submit(mockEvent);

        expect(wrapper.instance().props.onSubmit).toHaveBeenCalled();
    });
});
