import Vue from "vue";
import { mount } from "@vue/test-utils";
import sinon from "sinon";

import FlightSearchResults from "@/components/FlightSearchResults";

import axios from "axios";

const fakeFlights = [
  {
    id: 1,
    flight_number: "BA256",
    departure_date: "2022-03-01T04:20:00.000Z",
    origin: "SYD",
    destination: "MEL",
    airplane_id: 7,
    created_at: "2022-02-28T01:44:21.490Z",
    updated_at: "2022-02-28T01:44:21.490Z",
    airplane: {
      name: "747"
    }
  }, // First flight
  {
    id: 2,
    flight_number: "BA512",
    departure_date: "2022-03-02T11:20:00.000Z",
    origin: "SYD",
    destination: "MEL",
    airplane_id: 7,
    created_at: "2022-02-28T01:44:21.504Z",
    updated_at: "2022-02-28T01:44:21.504Z",
    airplane: {
      name: "737 MAX"
    }
  } // second flight
];

axios.get = sinon.stub().returns(Promise.resolve({ data: fakeFlights }));

const $router = {
  push: sinon.spy()
};

describe("<FlightSearchResults>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(FlightSearchResults, {
      mocks: {
        $router: $router
      },
      propsData: {
        origin: "SYD",
        destination: "MEL"
      }
    });
  });

  it("should render without errors", () => {
    expect(wrapper.text()).to.contain("Search Results from SYD to MEL");
    expect(wrapper.text()).to.contain("Loading flight results");
  }); // it SMOKEY TEST

  it("should render a list of matching flights", async () => {
    // console.log('page before waiting', wrapper.text());

    await wrapper.vm.$nextTick();

    expect(axios.get).to.have.been.calledWith("http://localhost:3000/flights/search/SYD/MEL");

    // console.log('page after waiting', wrapper.text());

    expect(wrapper.text()).to.not.contain("Loading flight results");

    const results = wrapper.findAll("div.result");

    expect(results.length).to.equal(2);

    expect(results.at(0).text()).to.contain("BA256");

    expect(results.at(0).text()).to.contain("747");

    expect(results.at(1).text()).to.contain("BA512");

    expect(results.at(1).text()).to.contain("737 MAX");
  });

  it("should push the clicked result onto the router", async () => {
    await wrapper.vm.$nextTick();

    const results = wrapper.findAll("div.result div");

    // console.log('first result', results.at(0).html());

    await results.at(0).trigger("click");

    expect($router.push).to.have.been.calledWith(
      sinon.match({
        name: "FlightDetails",
        params: {
          id: 1
        }
      })
    );
  });
}); // describe <FlightSearchResults>
