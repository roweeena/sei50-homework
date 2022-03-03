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

      <div class="seating">

        <div class="planeRow" v-for="row in flight.airplane.rows">
          
          {{row}}
          <div 
            class="planeSeat" 
            v-bind:class="getSeatStatus(row,col)"
            v-for="col in flight.airplane.cols"
            :key="col"
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
  const FAKE_USER_ID = 16;
  import axios from 'axios';
  const API_BASE_URL = 'http://localhost:3000/';



export default {
  name: 'FlightDetails',
  props: ['id'],
  data(){
    return{
      flight: {},
      loading: true
    }
  },

  filters: {
    seatColToLetter(col){
      return String.fromCharCode(64 + col)
    }

  },

  methods: {
    getSeatStatus(row, col){
      // return Math.random() > 0.5 ? 'occupied' : 'booked'
      for (const res of this.flight.reservations) {
        if (res.row === row && res.col == col) {

          if (res.user_id == FAKE_USER_ID) {
            return 'booked'
          }else{
            return 'occupied'
          }


        }

      } // for each reservation

      return ''; // not occupied
    },

    selectSeat(row, col){
      console.log('clicked', row, col);
    },
  },


  async mounted(){
    console.log('mounted');
    const url = `${API_BASE_URL}flights/${this.id}`

    try {
      const res = await axios.get(url)
      console.log(res);
      this.flight = res.data;
      this.loading = false;
    } catch (error) {
      console.log('Error loading flight details', error);
    }


  }
}
</script>

<style>

.seating{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
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
  cursor: not-allowed;
}

.occupied{
  background-color: rgba(255, 9, 9, 0.249);
  cursor: not-allowed;
}

.available{
  background-color: rgba(2, 176, 2, 0.338);
}


</style>