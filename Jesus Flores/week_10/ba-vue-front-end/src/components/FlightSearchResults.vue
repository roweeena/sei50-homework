<template>
  <div>
        <h2>
            Search Results from {{origin}} to {{destination}}
        </h2>
        <div v-if="flights">
            <ul >
                <li v-for="value in flights" :key="value.id">
                    <router-link :to="{ name: 'ShowFlight', params: { id: value.id }}">
                      Origin: {{ value.origin }} <strong>|</strong>
                      Destination: {{ value.destination }} <strong>|</strong>
                      Flight: {{value.flight_number}} <strong>|</strong>
                      Airplane: {{value.airplane.name}}
                    </router-link>
                 </li>
            </ul>
        </div>
        <div v-else>
           loading...
        </div>
  </div>
</template>

<script>
import FlightsHttp from '../services/Flights'
const flights = new FlightsHttp()
export default {
  name: 'FlightSearchResults',
  props: ['origin', 'destination'],
  data () {
    return {
      flights: [],
      loading: true,
      error: null
      // state goes here
    }
  },
  mounted () {
    flights.getFlights(this.origin, this.destination)
      .then(res => { this.flights = res })
      .catch(error => { this.error = error })
      .finally(() => { this.loading = false })
  }
}
</script>

<style>

</style>
