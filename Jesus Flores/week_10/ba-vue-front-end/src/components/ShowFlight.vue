<template>
  <div>
     <div v-if="loading">
      <p>Loading flight details...</p>
    </div>
    <div v-else>
    <h2>
        Flight: {{flight.flight_number}} | {{flight.origin}}-{{flight.destination}}
    </h2>
    <h2>
      Departure Date: {{flight.departure_date}}
    </h2>
    <h3> {{message}} </h3>
        <div class="seat_details">
            <div class="column-letters text-center" v-for="col in flight.airplane.cols" :key="col">
                  <p> {{ letters[col].toUpperCase() }} </p>
                   <div  v-on:click="bookSeats(col, row)" class="columns" v-for="row in flight.airplane.rows" :key="row" :class="seatReserved(col, row)">
                      {{ letters[col].toUpperCase()}}{{ row }}
                  </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import FlightsHttp from '../services/Flights'
const flights = new FlightsHttp()
export default {
  name: 'ShowFlight',
  props: ['id'],
  data () {
    return {
      flight: {},
      loading: true,
      error: null,
      letters: [...'abcdefghijklmnopqrstuvwxyz'],
      reservations: [],
      board: null,
      message: ''
      // state goes here
    }
  },
  mounted () {
    flights.showFlight(this.id)
      .then(res => {
        this.flight = res
      })
      .catch(error => { this.error = error })
      .finally(() => { this.loading = false })
  },

  methods: {
    seatReserved (cols, rows) {
      const reservations = this.flight.reservations
      for (let i = 0; i < reservations.length; i++) {
        if (reservations[i].col === cols && reservations[i].row === rows) {
          return 'reserved'
        }
      }
    },

    bookSeats (cols, rows) {
      const newReservation = {
        user_id: 55,
        col: cols,
        row: rows,
        flight_id: this.flight.id
      }
      this.flight.reservations.push({col: cols, row: rows}) // We change the state
      flights.saveReservation(newReservation)
        .then(res => {
          if (res.id !== null) {
            this.message = `Flight has been booked, your seat: ${this.letters[cols].toUpperCase()}${rows + 1}`
          }
        })
        .catch(error => { this.error = error })
        .finally(() => { this.loading = false })
    }
  }
}
</script>

<style scoped>

</style>
