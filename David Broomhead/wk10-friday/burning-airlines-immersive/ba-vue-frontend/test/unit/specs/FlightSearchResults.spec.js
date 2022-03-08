import Vue from 'vue';
import {mount} from '@vue/test-utils';
import sinon from 'sinon';

import FlightSearchResults from '@/components/FlightSearchResults';

import axios from 'axios';

describe('<FlightSearchResults', () => {
    
    let wrapper;
    beforeEach( () => {
        wrapper = mount(FlightSearchResults, {
            propsData: {origin: 'SYD', destination: 'MEL'}
        });
    });

    it('renders without errors', () => {
        expect(wrapper.text()).to.contain('Search Results from SYD to MEL');
    })

    it('renders a list of matching flights', () => {
        await wrapper.vm.$nextTick();
    });
}); // desribe FlightSearchResults