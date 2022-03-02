import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FlightSearch from '@/components/FlightSearch';
import FlightSearchResults from '@/components/FlightSearchResults';
import Flight from '@/components/Flight';
import FlightDetails from '@/components/FlightDetails';





// Do not use the real router if we are in testing mode! Becasue we need to be able to mock of fake the $router for testing.
// Karma sets this environment variable to 'testing'; when using the dev server and the browser it will be 'development'.
if (process.env.NODE_ENV !== 'testing') {
  Vue.use(Router)
}
// console.log(process.env);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'Search',
      component: FlightSearch
    },
    {
      path: '/search/:origin/:destination',
      name: 'SearchResults',
      component: FlightSearchResults,
      props: true
    },
    // {
    //   path: '/flights/:id',
    //   name: 'Flight',
    //   component: Flight,
    //   props: true
    // }
    {
      path: '/flights/:id',
      name: 'FlightDetails',
      component: FlightDetails,
      props: true
    }
  ]
})
