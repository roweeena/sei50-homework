<template>
    <div>
        {{flightDetails.flight_number}}
        <h2>FROM {{flightDetails.origin}} TO {{flightDetails.destination}}</h2>
        {{flightDetails.airplane}}
        <div class="seat-plan">
            <div class="columns" v-for="(columns,index) in columns" :key="index" >

                <div class="rows seats" v-for="(rows, index1) in seats" v-on:click="takeSeat(index, index1)" :key="index1"
                :class="seatTaken(index, index1)"
                >
                    
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/'

    export default {
        name: 'FlightDetails',
        props:['id'],
        data(){
            return{
                flightDetails: [],
                seats: null,
                reservations: [],
                columns: 0,
            }
        },
        async mounted(){
            console.log('FlightDetails mounted, ID =', this.id)

            try {
                const url = `${API_BASE_URL}/flights/${this.id}`
                const res = await axios.get(url)
                console.log(res.data)
                this.flightDetails = res.data
                this.reservations = res.data.reservations
                this.seatPlan( res.data.airplane.rows, res.data.airplane.cols )
                this.columns = res.data.airplane.cols
            } catch(err) {
                console.err('ERROR LOADING RESULTS', err)
                this.error = error
            }
        },
        methods:{
            seatPlan(rows, cols){
                console.log(rows, cols)
                this.seats = new Array(rows).fill(new Array(cols).fill( 'vacant' ))
                console.log(this.seats)
                
            },
            async takeSeat(col, row){
                console.log("TAKE SEAT", row + 1, col + 1)
                const url = `${API_BASE_URL}flights/book/${this.id}`
                const res = await axios.post(url, {
                    row: row,
                    col: col
                })
            },
            seatTaken(column, rows){
                const reservations = this.reservations 
                for (let i = 0; i < reservations.length; i++){
                    if (reservations[i].col === column && reservations[i].row === rows){
                        // console.log('SEAT TAKEN', column, rows)
                        return 'taken'
                    }
                    // console.log('THIS SEAT IS TAKEN', column, rows)
                } 
                // reservations.forEach((e) => {
                //     if (e.col === column && e.row === rows)
                //     console.log('SEAT TAKEN', column, rows)
                //     // console.log('THIS SEAT IS TAKEN', column, rows)
                //     return 'taken'
                // })
            }
        }
    }
</script>

<style scoped>
    .seats{
        width:50px;
        height:50px;
        border:1px solid black;
        margin-top:3px;
    }
    .seats:hover{
        background-color:royalblue
    }
    .seat-plan{
        display:grid;
        grid-template-columns: repeat(6, 1fr)
    }
    .taken{
        background-color:crimson;
        cursor:not-allowed
    }
    .taken:hover{
        background-color:crimson; 
        /* lol */
    }
</style>