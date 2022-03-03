<template>
  <div>
      <h2>Reservation Confirm</h2>
      <h3>Your Seats: {{ letter }}{{ rows}}</h3>
      <div class="seating">
          <button v-on:click="confirmSeat">Confirm Reservation</button>
      </div>
  </div>
</template>

<script>
export default {
  props: ['cols', 'rows', 'letter'],
  name: 'ReservationConfim',
  methods: {
    confirmSeat () {
      console.log('seat confimed')
      this.$emit('confirmSeat')// We emit event 'confirmSeat' and we listen for it in the parent.
    }
  }
}
</script>

<style scoped>

</style>
