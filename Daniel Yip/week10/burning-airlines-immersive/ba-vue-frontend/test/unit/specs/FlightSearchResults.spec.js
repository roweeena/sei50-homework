
import Vue from "vue";
import { mount } from "@vue/test-utils";
import FlightSearchResults from "@/components/FlightSearchResults"
import axios from 'axios'
import moxios from 'moxios'


const $router = {
  push: sinon.spy() // a spy is a mock that keeps track of whether/how it was called
}

describe('<FlightSearchResults>', ()=>{
  
  it('should render a loading page', ()=>{
    const wrapper = mount(
      FlightSearchResults, {
        propsData: {
          origin: 'SYD',
          destination: 'MEL'
        },
      }
    ); // wrapper mount
    console.log(wrapper.text());
    expect(wrapper.text()).to.contain('Loading')
  }); // should render loading 

  it('should return the results of the search', async (done) => {

    moxios.install()
        
    const wrapper = mount(
      FlightSearchResults, {
        propsData: {
          origin: 'SYD',
          destination: 'MEL'
        },
      }
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

    await wrapper.vm.$nextTick(()=>{
      console.log('hello', wrapper.text());
      expect(wrapper.text()).to.contain('BA512')
      done();
    });
    
 
  }); // should re-render results

  // it('should return the results of the search', (done)=>{

  //   moxios.install()
        
  //   const wrapper = mount(
  //     FlightSearchResults, {
  //       propsData: {
  //         origin: 'SYD',
  //         destination: 'MEL'
  //       },
  //     }
  //   ); // wrapper mount

  //   moxios.wait(async()=>{
  //     const request = moxios.requests.mostRecent()
  //     await request.respondWith({status: 200, response: [
  //       {
  //           "id": 7,
  //           "flight_number": "BA256",
  //           "departure_date": "2022-03-01T04:20:00.000Z",
  //           "origin": "SYD",
  //           "destination": "MEL",
  //           "airplane_id": 9,
  //           "created_at": "2022-02-28T01:43:47.532Z",
  //           "updated_at": "2022-02-28T01:43:47.532Z",
  //           "airplane": {
  //               "name": "747"
  //           }
  //       },
  //       {
  //           "id": 8,
  //           "flight_number": "BA512",
  //           "departure_date": "2022-03-02T11:20:00.000Z",
  //           "origin": "SYD",
  //           "destination": "MEL",
  //           "airplane_id": 9,
  //           "created_at": "2022-02-28T01:43:47.538Z",
  //           "updated_at": "2022-02-28T01:43:47.538Z",
  //           "airplane": {
  //               "name": "747"
  //           }
  //       }
  //     ]}) //respondWith()
  //     expect(wrapper.text()).to.contain('BA512')
  //     console.log(wrapper.text());
  //     done();
  //   }) // moxios.wait()
 
  // }); // should re-render results

}) //describe