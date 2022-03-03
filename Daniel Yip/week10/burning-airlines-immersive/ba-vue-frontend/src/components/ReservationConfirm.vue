<template>
  <div class="confirm">
    <h3>Your Seat Selection:</h3>
    <div class="seat">
      {{row}}{{col | seatColToLetter}}
    </div>
    <!-- <button @click="confirmSeat">Confirm</button> -->
    <button @click="$emit('seatConfirmed')">Confirm</button>
  </div>
</template>

<script>
export default {
  name: 'ReservationConfirm',
  props: ['row', 'col'],
  filters: {
    seatColToLetter(col){
      return String.fromCharCode(64 + col)
    }
  },
  methods: {
    // confirmSeat(){
    //   console.log('seat confirm clicked');
    //   this.$emit('seatConfirmed', 1, 2, 3);
    // }
  }
}
</script>

<style>

</style>