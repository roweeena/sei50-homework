<template>
  <div>
    <h2></h2>
        <div class="seat_details">
            <div class="column-letters text-center" v-for="(cols, index)  in board" :key="index">
                  <p> {{ letters[index].toUpperCase() }} </p>
                  <div  class="columns" v-for="(rows, index2)  in board[index]" :key="index2">
                      {{ letters[index].toUpperCase() }}{{index2}}
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
      board: null
      // state goes here
    }
  },
  mounted () {
    flights.showFlight(this.id)
      .then(res => {
        this.flight = res
        console.log(res)
        this.boardScheme(res.airplane.cols, res.airplane.rows)
      })
      .catch(error => { this.error = error })
      .finally(() => { this.loading = false })
  },
  methods: {
    boardScheme (cols, rows) {
      this.board = [...Array(cols)].map(_ => Array(rows).fill(null))
    }
  }
}
</script>

<style scoped>

</style>
