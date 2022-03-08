<template>
    <div>
        <div v-if="loading">
            <p>Loading flight details gif....</p>
        </div>

        <div v-else>
            <h2>Flight {{this.flight.flight_number}}</h2>
        </div>
  
        <div class="departure_date">
            <p>Departure Date:</p>
            {{flight.departure_date}}
        </div>
  
        <div class="origin">
            <p>Origin:</p>
            {{flight.origin}}
        </div>

        <div class="destination">
            <p>Destination:</p>
            {{flight.destination}}
        </div>

        <div class="airplane">
            <p>Aircraft:</p>
            {{flight.airplane.name}}
        </div>

        <reservation-confirm 
        v-if="selectedSeat.row && selectedSeat.col" 
        :row="selectedSeat.row"
        :col="selectedSeat.col"
        @confirm-seat.once="postBookingDetails"
        />

        <div class="confirmation" v-if="confirmationMessage.length > 0">
            <p>Your booking has been made!!!</p>
        </div>

        <div class="seating">
            <div 
            class="row" 
            v-for="row in flight.airplane.rows"
            :key="row"
            >
                {{row}}
                <div 
                v-for="col in flight.airplane.cols"
                class="planeSeat" 
                :key="col"
                v-bind:class="getSeatStatus(row,col)"
                @click="selectSeat(row,col)"
                >
                    {{col | seatColToLetter}}
                </div>
                {{row}}
            </div>
        </div> 
    </div>
</template>

<script>
    import ReservationConfirm from './ReservationConfirm.vue'
    import axios from 'axios';
    import { DateTime } from 'luxon';

    const FAKE_USER_ID = 28;
    const API_BASE_URL = 'http://localhost:3000/';

    export default {
        name: 'FlightDetails',
        props: ['id'],
        components: {ReservationConfirm}, // ReservationConfirm: ReservationConfirm
        data(){
            return{
                flight: {
                    airplane: {},
                    reservations: []
                },
                seating: {},
                loading: true,
                error: null,
                selectedSeat: {
                    row: null,
                    col: null
                },
                confirmationMessage: ''
            }
        },
        filters: {         // functions that use piping per line 35
            seatColToLetter(column){
                return String.fromCharCode(64 + column);
            }
        },
        methods: {
            getSeatStatus(row,col){
                for(const res of this.flight.reservations){
                    if(res.row === row && res.col === col){
                        if(res.user_id === FAKE_USER_ID){
                            return 'booked';
                        }else{
                            return 'occupied';
                        }
                    }
                } // for each reservation
                if (this.selectedSeat.row === row && this.selectedSeat.col === col){
                    return 'selected'; // early return for new seat booking, gives class selected to seat
                }
                return 'available'; // not occupied
            }, // getSeatStatus

            async getFlight() {
                try {
                    const url = `${API_BASE_URL}flights/${this.id}`;
                    const res = await axios.get(url);
                    this.flight = res.data;
                    this.loading = false;
                    this.createSeatingObject(res.data.reservations)
                } catch(err) {
                    console.log('Error loading Flight details', err);
                    this.error = err;
                }
            },






            // take data from flight.reservations array => flight.reservations[0].row and flight.reservations[0].col
            // and give to object flight.reservations
            // 0: 
                // row: 1,
                // col: 1
            // reservations = {1:1, 1:2, 1:3 ... }

            // reduce executes a user-supplied "reducer" callback function on each element of the array
            // it passes in the return value from the calculation on the preceding element
            // createSeatingObject(data) {
            //     const jsData = JSON.parse(data)
            //     const result = jsData.reduce((c, v) => {
            //         console.log('running reduce()',c,v)
            //         c[v.reservations.row] = c[v.reservations.col] || {}
            //         console.log('result = ',result);
            //     }, {})
            //     this.flight.reservations = result;
            // },

            createSeatingObject(data){
                let response = {}

                console.log

                data.forEach(reservation => { response[reservation.row] = reservation.col });

                console.log(response)
            },





            selectSeat(row,col){
                this.selectedSeat = {row,col};
                this.confirmationMessage = '';
            }, // selectSeat()

            async postBookingDetails(...allArgs){
                console.log('data received from child:', allArgs)
                try{
                    const url = `${API_BASE_URL}reservations`;
                    const res = await axios.post(url,{
                        flight_id: this.id,            // get id from props (via router URL)
                        row: this.selectedSeat.row,
                        col: this.selectedSeat.col
                    });
                    console.log('reservation response: ',res.data)

                    // stop the confirmation child component displaying
                    this.selectedSeat = {};

                    // trigger render of seating diagram so booked seat changes color
                    this.flight.reservations.push(res.data);

                    // show a message to the user
                    this.confirmationMessage = 'Your reservation was successfully booked!';
                } catch(err){
                    console.log('error making reservation:',err);
                    this.error = err;
                }
            } // postBookingDetails()
        }, // methods

        async mounted(){
            // console.log('FlightDetails() mounted ID=',this.id);
            this.getFlight();
            // poll the server every 10s to get new reservations
            window.setInterval(this.getFlight,60000); 
        } // async mounted()
    }
</script>

<style lang="css" scoped>
    .seating {
        margin-top: 50px;
    }
    
    .planeSeat {
        display: inline-block;
        width:40px;
        height:40px;
        border: 1px solid darkblue;
        line-height: 40px;
        border-radius: 20% 20% 0 0;
        margin: 4px;
        cursor: pointer;
    }

    .available:hover {
        background-color: rgba(255, 166, 0, 0.406);
        border: 1px solid rgb(36, 36, 36);
    }

    .occupied {
        background-color: rgb(100, 100, 100);
        pointer-events: none;
    }

    .booked {
        display: inline-block;
        width:40px;
        height:40px;
        border: 1px solid darkblue;
        line-height: 40px;
        border-radius: 20% 20% 0 0;
        margin: 4px;
        cursor: pointer;
        background-color: orange;
    }

    .book-seat {
        padding: 20px 40px;
    }

    .seat-confirmation {
        position: fixed;
        bottom: 20px;
        right: 50px;
        border: 1px solid grey;
        padding: 10px 20px;
    }

    .selected {
        background-color: darkgreen;
    }
</style>