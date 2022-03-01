<template>
  <div>
    <h2>
        Flight: {{flight.flight_number}} | {{flight.origin}}-{{flight.destination}}
    </h2>
    <h2>
      Departure Date: {{flight.departure_date}}
    </h2>
    <h3> {{message}} </h3>
        <div class="seat_details">
            <div class="column-letters text-center" v-for="(cols, index)  in board" :key="index">
                  <p> {{ letters[index].toUpperCase() }} </p>
                  <div v-on:click="bookSeats(index, index2)"  class="columns" v-for="(rows, index2)  in board[index]" :key="index2" :class="seatReserved(index, index2)">
                      {{ letters[index].toUpperCase() }}{{index2 + 1}}
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
      flight: [],
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
        this.boardScheme(res.airplane.cols, res.airplane.rows)
      })
      .catch(error => { this.error = error })
      .finally(() => { this.loading = false })
  },

  methods: {
    boardScheme (cols, rows) {
      this.board = [...Array(cols)].map(_ => Array(rows).fill(null))
    },

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
