import React from 'react';
import { mount } from 'enzyme';
import Demo from '../src/demo';


describe('UI test #demo', () => {
    it('should have title', () => {
        const wrapper = mount( < Demo / > );
        const title = wrapper.find('h1');
        expect(title).toHaveLength(1);
        expect(title.text()).toBe('this is a demo');
    })
})