<template>
  <div>
    
    <div v-if="loading" class="load">
      <img src="@/assets/loading.gif">
    </div>
    <div v-else>
      <h2>{{flight.flight_number}} from {{flight.origin}} to {{flight.destination}} on {{new Date(flight.departure_date) | dateFormat('dddd D MMM YYYY')}} </h2>

        <div class="cabin">
          <div 
            v-for="(row, i) in seatingArray"
            :key="i" 
            class="row"
          >
            <div 
              v-for="(seat, j) in seatingArray[i]"
              :key="j" 
              class="seat"
              :class="setSeatClass(i,j)"
              @click="bookSeat(i,j)"
            >
              
              {{i+1}}{{String.fromCharCode(j+65)}}
              
            </div>
          </div>
        </div>

    </div>
    
  </div>
</template>

<script>

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/'

export default {
  name: 'Flight',
  props: ['id'],
  data(){
    return{
      current_user: {
        id: 16
      },
      flight: '',
      seatingArray: [],
      loading: false,
      error: null
    }
  },
  mounted(){
    this.fetchFlightData()
  },
  methods:{
    async fetchFlightData(){
      try {
        const res = await axios.get(`${API_BASE_URL}flights/${this.id}`)
        console.log(res.data);
        this.flight = res.data;
        this.seatingArray = new Array(res.data.airplane.rows).fill(new Array(res.data.airplane.cols))
        this.loading = false;

      } catch (error) {
        console.log('ERROR', error);
        this.error = error;
        this.loading = false;
      }
    }, // fetchFlightData()

    // returns a className for a seat based on the flight reservations
    setSeatClass(row, col){
      let className = "available"
      this.flight.reservations.forEach(res => {
        
        if(res.row === row && res.col === col){
          
          if(res.user_id === this.current_user.id){
            className = 'this-user'
            } else {
              className = 'other-user'
            }
        }
      });
      return className
    }, // setSeatClass()

    // sends a post to the server to book a seat
    async bookSeat(row, col){
      if (this.flight.reservations.some(res => res.row === row && res.col === col)) return

      this.loading = true
      try {
        const res = await axios.post(`${API_BASE_URL}reservations/create`, {
          flight_id: this.flight.id,
          row: row,
          col: col
        })
        this.flight.reservations.push(res.data)
        this.loading = false
      } catch (error) {
        console.log('ERROR', error);
      }
    }, // bookSeat()

  }, // methods

} // exportDefault

</script>

<style scoped>
*{
  /* border: 1px solid hotpink; */
}

.cabin{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7em
}

.row{
  display: flex;
  width: fit-content;
  gap: 0.25em;
}

.seat{
  width: 2em;
  height: 2em;
  border-radius: 0.25em;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.208);
}

.this-user{
  background-color: rgba(0, 123, 255, 0.667);
  cursor: not-allowed;
}

.other-user{
  background-color: rgba(255, 9, 9, 0.249);
  cursor: not-allowed;
}

.available{
  background-color: rgba(2, 176, 2, 0.338);
}

.available:hover{
  cursor: pointer;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.297);
  font-weight: bold;
}
</style>>
