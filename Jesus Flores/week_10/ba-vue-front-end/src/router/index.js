import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FlightSearch from '@/components/FlightSearch'
import FlightSearchResults from '@/components/FlightSearchResults'
import ShowFlight from '@/components/ShowFlight'

Vue.use(Router)

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
    {
      path: '/flight/:id',
      name: 'ShowFlight',
      component: ShowFlight,
      props: true
    }
  ]
})
