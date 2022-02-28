<template>
  <div>
        <h2>
            Search Results from: {{origin}}  {{destination}}
        </h2>
        <div v-if="flights">
            <ul >
                <li v-for="value in flights" :key="value.id">
                    Origin: {{ value.origin }} <strong>|</strong>
                    Destination: {{ value.destination }} <strong>|</strong>
                    Flight: {{value.flight_number}} <strong>|</strong>
                    Airplane: {{value.airplane.name}}
                </li>
            </ul>
        </div>
        <div v-else>
           loading...
        </div>
  </div>
</template>

<script>
import axios from 'axios'
const API_BASE_URL = 'http://localhost:3000/'
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
  async mounted () {
    try {
      const url = `${API_BASE_URL}/flights/search/${this.origin}/${this.destination}`
      const res = await axios.get(url)
      console.log(res.data);
      this.flights = res.data
    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }
  }
}
</script>

<style>

</style>
