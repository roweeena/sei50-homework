<template>
  <div>
    <h2>Search Results from {{ origin }} to {{ destination }}</h2>

    <div v-if="loading" class="load">
      <p>Loading flight results....</p>
    </div>

    <div v-else class="results">
      <div v-for="flight in flights" class="result">
        <div @click="gotoFlight(flight._id)">
          {{ new Date(flight.departure_date) | dateFormat("DD/MM/YY") }}
          {{ formatDate(flight.departure_date) }}
          {{ flight.flight_number }}
          -
          {{ flight.airplane.name }}
        </div>
      </div>
      <!-- v-for loop closing div tag -->
    </div>
    <!-- v-else (loading == false) div closing tag -->
  </div>
</template>

<script>
import { DateTime } from "luxon";
import { fetchFlightSearchResults } from "../lib/api";
// window.testDateTime = DateTime

export default {
  name: "FlightSearchResults",
  props: ["origin", "destination"],
  data() {
    return {
      // state goes here
      flights: [],
      loading: true,
      error: null
    };
  }, // data()

  // This is like React's componentDidMount() - runs once when the component
  // is added to the DOM
  async mounted() {
    try {
      const res = await fetchFlightSearchResults(this.origin, this.destination);
      this.flights = res.data;
      this.loading = false;
    } catch (err) {
      console.log("Error loading flight search results", err);
      this.error = err;
    }
  }, // mounted()

  methods: {
    gotoFlight(id) {
      console.log("in gotoFlight", id);
      this.$router.push({
        name: "FlightDetails",
        params: { id }
      });
    },

    formatDate(isoDate) {
      return DateTime.fromISO(isoDate).toLocaleString(DateTime.DATETIME_MED);
    }
  } // methods
}; // export default object
</script>

<style scoped>
.results p {
  cursor: pointer;
}

.results p:hover {
  text-decoration: underline;
}
</style>
