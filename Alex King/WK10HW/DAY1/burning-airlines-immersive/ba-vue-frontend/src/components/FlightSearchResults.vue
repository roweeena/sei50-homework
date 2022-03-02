<template>
    <div>
        <h2>Search results from {{origin}} to {{destination}}</h2>
        <div v-if="loading">
            <p>Loading results...</p>

        </div>
        <div v-else>
            <div class="results" v-for="flight in flights">
                <div @click="goToFlight(flight.id)">
                    {{ flight.departure_date }}
                    {{ flight.flight_number }} - {{flight.airplane.name}}
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/'


export default {
    name:'FlightSearchResults',
    props: ['origin', 'destination'],
    data(){
        return{
            flights: [],
            loading: true,
            error: null
        }
    },
    async mounted(){
        console.log('Component MOUNTED', this.origin, this.destination)

        try {
            const url = `${API_BASE_URL}/flights/search/${this.origin}/${this.destination}`
            const res = await axios.get(url)
            console.log(res.data)
            this.flights = res.data
            this.loading = false
        } catch(err) {
            console.err('ERROR LOADING RESULTS', err)
            this.error = error
        }

    },
    methods:{
        goToFlight(id){
            console.log('goToFlight', id);
            this.$router.push({
                name: 'FlightDetails',
                params: {
                    id: id
                }
            })
        }, // gotToFlight()
    }
}
</script>

<style scoped>
    .results div{
        cursor: pointer;
        padding:3px;
    }
    .results div:hover{
        outline:1px solid black;
    }
</style>