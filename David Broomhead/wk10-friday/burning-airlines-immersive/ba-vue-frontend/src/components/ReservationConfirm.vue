<template>
    <div class="confirm">
        <p>Your seat selection:</p>
        <div class="seat">
            {{row}}{{col | seatColToLetter}}
        </div>
        <button @click="confirmSeat">Confirm</button>
    </div>
</template>

<script>
export default {

    name: 'ReservationConfirm',
    props: ['row','col'],
    methods: {
        confirmSeat(){
            // tell the parent to make the booking for the selected seat
            this.$emit('confirm-seat')
        } // confirmSeat()
    }, //methods
    filters: {         // functions that use the piping per line 35
        seatColToLetter(column){
            return String.fromCharCode(64 + column);
        } // seatColToLetter
    } // filters
} // export default
</script>

<style lang="css" scoped>
    .confirm {
        position: fixed;
        bottom: 50vh;
        right: 50px;
        border: 1px solid grey;
        padding: 10px 20px;
    }

    .seat {
        padding:20px;
        font-weight: bold;
    }
</style>