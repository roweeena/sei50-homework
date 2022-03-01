import { mount } from '@vue/test-utils'
import FlightSearch from '@/components/FlightSearch'
import Sinon from 'sinon'
/*
Karma - "Test runner", sets up test enviroment, loads config,
        loads plugings and assertion library, finds all the .spec.js files
        and runs the 'describe and 'it' blocks in the right way for us
        Alternatives:
            - Jasmine (requires separate assertion library chai or mocha)
            - Jest(From FB, includes assertions libraries)
Chai/mocca - "Assertion library", it gives us test assertion synxta like 'expect(type of 'a').to.equal('string')

vue-test-utils -  adapter for mounting compoonents within a headless/test browser enviroment, and also for
                  querying for elements within the "wrapped" DOM,
                  i.e 'wrapper.fidAll("li")'
*/
const $router = { push: Sinon.spy() }

describe(' <FlightSearch>', () => {
// <FlightSearch> (component) is normally managed by the Vue router -
// it is mounted onto the DOM when a user goes to the '/search'
// route.
// But in our test environment, we are just mounting the
// component directly, in isolation. So features provided
// by the router, like 'this.$router', and therefore
// 'this.$router.push()', are not defined! This means
// that the component will throw an error when we try
// to click on the search button, which triggers that
// router push.
// SO, since we need to know as the "final output" of this
// component whether it actually tries to push the correct
// search results route onto the router... we need to
// fake the router and in particular, its push() method,
// so we can test whether the component is actually doing
// its job!
  it('it should render a search form', async () => {
    const wrapper = mount(FlightSearch, {
      mocks: {
        // $router: {
        //   push: function (args) {
        //     expect(args.name).to.equal('SearchResult')
        //   }
        // }
        $router: $router
      }
    })
    expect(wrapper.text()).to.contain('Search Flights')

    const options = wrapper.findAll('option')
    expect(options.at(1).text()).to.equal('Sydney')

    const button = wrapper.find('button')
    expect(button.element.tagName).to.equal('BUTTON')
    await button.trigger('click')
    // Final thing we need to check is that the component
    // Did run the this.$router. push() function (Which we have now mocked)
    expect($router.push).to.have.been.called
  })
})
