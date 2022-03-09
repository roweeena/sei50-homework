<template>
  <div>
    
    <div v-if="loading">
      <p>Loading flight details...</p>
    </div>

    <div v-else>
    
      <h2>Flight {{flight.flight_number}}</h2>
      <div class="departure_date">
        <strong>Departure Date:</strong>
        {{new Date(flight.departure_date) | dateFormat('DD/MM/YY')}}
      </div>

      <div class="origin">
        <strong>Origin:</strong>
        {{flight.origin}}
      </div>

      <div class="destination">
        <strong>Destination:</strong>
        {{flight.destination}}
      </div>
      <div class="airplane">
        <strong>Aircraft:</strong>
        {{flight.airplane.name}}
      </div>

      
      <ReservationConfirm 
        v-if="selectedSeat.row"
        :row="this.selectedSeat.row"
        :col="this.selectedSeat.col"
        @seatConfirmed.once="handleSeatConfirmed"
      />

      <div class="confirmation" v-if="confirmationMessage.length > 0 && !selectedSeat.row">
        {{confirmationMessage}}
      </div>


      <div class="seating">

        <div 
          v-for="row in flight.airplane.rows"
          class="planeRow"
          :key="row" 
        >
          
          {{row}}
          <div 
            v-for="col in flight.airplane.cols"
            :key="col"
            class="planeSeat" 
            :class="getSeatStatus(row,col)"
            @click="selectSeat(row, col)"
          >
            {{col | seatColToLetter }}
          </div>
          {{row}}

        </div>

      </div>

    </div>
    



  </div>
</template>

<script>
  import ReservationConfirm from './ReservationConfirm'
  import {fetchFlightDetails, createReservation} from '../lib/api'

  const FAKE_USER_ID = '6225e5bce2ce96ae8311f1b1'

export default {
  name: 'FlightDetails',
  props: ['id'],
  components: {
    ReservationConfirm
  },
  data(){
    return{
      flight: {},
      reservations: {},
      loading: true,
      error: null,
      selectedSeat: {
        row: null,
        col: null
      },
      confirmationMessage: ''
    }
  },

  filters: {
    seatColToLetter(col){
      return String.fromCharCode(64 + col)
    }

  },

  methods: {
    getSeatStatus(row, col){

      if(this.reservations[`${row}-${col}`]){

        if(this.selectedSeat.row === this.reservations[`${row}-${col}`].row && this.selectedSeat.col == this.reservations[`${row}-${col}`].col){
            this.selectedSeat = {}
          }
          
          if (this.reservations[`${row}-${col}`].user == FAKE_USER_ID) {
            return 'booked'
          }else{
            return 'occupied'
          }
      }

      // for (const res of this.flight.reservations) {
      //   window.seatRenderCount ++

      //   if (res.row === row && res.col == col) {
          
      //     if(this.selectedSeat.row === res.row && this.selectedSeat.col == res.col){
      //       this.selectedSeat = {}
      //     }
          
      //     if (res.user_id == FAKE_USER_ID) {
      //       return 'booked'
      //     }else{
      //       return 'occupied'
      //     }
      //   }
      // } // for each reservation

        if(this.selectedSeat.row === row && this.selectedSeat.col === col) {
          return 'selected'
        }
      return ''; // not occupied
    },

    selectSeat(row, col){
      console.log('clicked', row, col);
      this.selectedSeat = {row, col}
    },

    async handleSeatConfirmed(){
      
      if (this.flight.reservations.some(res => res.row === this.selectedSeat.row && res.col === this.selectSeat.col)) return

      try {
        const res = await createReservation(this.flight_id, this.selectedSeat.row, this.selectedSeat.col)by
        console.log(res.data);
        this.reservations[`${this.selectedSeat.row}-${this.selectedSeat.col}`] = res.data
        this.selectedSeat = {}
        this.confirmationMessage = 'Your reservation was sucessfully booked!'

      } catch (error) {
        console.log('ERROR', error);
      }
    }, // bookSeat()
    async fetchFlightData(){

    try {
      const res = await fetchFlightDetails(this.id)
      this.flight = res.data;
      
      for (const reservation of res.data.reservations) {
        this.reservations[`${reservation.row}-${reservation.col}`] = reservation
      }
        
      // res.data.reservations
      // this.reservations
      this.loading = false;
    } catch (error) {
      console.log('Error loading flight details', error);
    }
    }
  },


  mounted(){
    window.seatRenderCount = 0
    
    this.fetchFlightData()

    // setInterval(() => {
    //   this.fetchFlightData()
    // }, 2000);

  }
}
</script>

<style>

.seating{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  gap: 0.7em;
}

.planeRow{
  display: flex;
  width: fit-content;
  line-height: 2em;
  gap: 0.25em;
}

.planeSeat{
  width: 2em;
  height: 2em;
  border-radius: 0.25em;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.208);
  line-height: 2em;
}

.planeSeat:hover{
  cursor: pointer;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.297);
  font-weight: bold;
}

.booked{
  background-color: rgba(0, 123, 255, 0.667);
  pointer-events: none;
}

.occupied{
  background-color: rgba(255, 9, 9, 0.249);
  pointer-events: none;
}

.available{
  background-color: rgba(2, 176, 2, 0.338);
}

.selected{
  background-color: green;
}


</style>