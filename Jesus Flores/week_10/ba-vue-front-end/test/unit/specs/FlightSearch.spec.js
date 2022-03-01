import Vue from 'vue'
import { mount } from '@vue/test-utils'
import FlightSearch from '@/components/FlightSearch'

describe(' <FlightSearch>', () => {
  it('it should render a search form', () => {
    const wrapper = mount(FlightSearch)
    expect(wrapper.text()).to.contain('Search Flights')

    const options = wrapper.find('option')
    console.log(options.text())
  })
})
