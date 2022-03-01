
import Vue from "vue";
import { mount } from "@vue/test-utils";
import FlightSearchResults from "@/components/FlightSearchResults"
import axios from 'axios'
import moxios from 'moxios'

describe('<FlightSearchResults>', ()=>{
  
  it('should render a loading page', ()=>{
    const wrapper = mount(
      FlightSearchResults,
      {
        mocks: {

        } //mocks
      } // options
    ); // wrapper mount
    expect(wrapper.text()).to.contain('Loading')
  }); // should render loading 

  it('should return the results of the search', async ()=>{

    // console.log(moxios);
    // moxios.install('http://localhost:3000/search/SYD/MEL')
    moxios.install()
    const wrapper = mount(
      FlightSearchResults,
      {
        mocks: {

        } //mocks
      } // options
    ); // wrapper mount
    moxios.wait(()=>{
      const request = moxios.requests.mostRecent()
      request.respondWith({status: 200, response: [
        {
            "id": 7,
            "flight_number": "BA256",
            "departure_date": "2022-03-01T04:20:00.000Z",
            "origin": "SYD",
            "destination": "MEL",
            "airplane_id": 9,
            "created_at": "2022-02-28T01:43:47.532Z",
            "updated_at": "2022-02-28T01:43:47.532Z",
            "airplane": {
                "name": "747"
            }
        },
        {
            "id": 8,
            "flight_number": "BA512",
            "departure_date": "2022-03-02T11:20:00.000Z",
            "origin": "SYD",
            "destination": "MEL",
            "airplane_id": 9,
            "created_at": "2022-02-28T01:43:47.538Z",
            "updated_at": "2022-02-28T01:43:47.538Z",
            "airplane": {
                "name": "747"
            }
        }
      ]}) //respondWith()
    }) // moxios.wait()

    console.log(wrapper.text());
    // const result = await this.mounted()
    
    // expect(result).to.have.length(2)

  }); // should re-render results






}) //describe