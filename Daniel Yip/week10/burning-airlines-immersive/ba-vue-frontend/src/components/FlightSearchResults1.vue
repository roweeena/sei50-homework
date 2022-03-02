<template>
  <div>
    <h2>Flight Search Results from {{origin}} to {{destination}}</h2>

    <div v-if="loading" class="load">
      <img src="@/assets/loading.gif">
    </div>

    <table v-else class="search-results">
      <tr>
        <th>Flight Number</th>
        <th>Departure Date</th>
        <th>Plane</th>
        <th>Origin</th>
        <th>Destination</th>
      </tr>
      <tr 
        v-for='flight in flights' 
        :key="flight.id" 
        class="flight-row" 
        @click="handleClick(flight.id)"
      >
        <td>{{ flight.flight_number}}</td>
        <td>{{ new Date(flight.departure_date) | dateFormat('DD/MM/YY')}}</td>
        <td>{{ flight.airplane.name}}</td>
        <td>{{ flight.origin}}</td>
        <td>{{ flight.destination}}</td>
      </tr>
    </table>

  </div>
</template>

<script>


import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/'

export default {
  name: 'FlightSearchResults',
  
  props: ['origin', 'destination'],
  data(){
    return {
      flights: [],
      loading: true,
      error: null
    }
  },
  
  // this is like componentDidMount
  async mounted(){
      console.log('component mounted', this.origin, this.destination);
      try {
        const res = await axios.get(`${API_BASE_URL}flights/search/${this.origin}/${this.destination}`)
        console.log(res.data);
        this.flights = res.data;
        this.loading = false;
    } catch (error) {
        console.log('ERROR in Axios get');
        this.error = error;
      }

  },

  methods: {
    handleClick(id){
      console.log(id);
      this.$router.push({
        name: 'Flight',
        params: {
          id: id
        }
      })
    }
  }
}
</script>

<style scoped>
  *{
   /* border: 1px solid hotpink; */
  }

  table{
    border-collapse: collapse;
  }
  th{
    padding: 0 0.5rem;
  }

  tr:nth-child(odd){
    background: rgba(0, 0, 0, 0.078)
  }

  .search-results{
    margin: 0 auto
  }
  .flight-row:hover{
    outline: 1px solid black;
    background-color: rgba(0, 0, 0, 0.133);
    cursor: pointer;
  }

</style>
