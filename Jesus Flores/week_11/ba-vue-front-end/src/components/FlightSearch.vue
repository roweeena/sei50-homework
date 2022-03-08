<template>
    <div>
        <h2>Search Flights</h2>
        <label for="Origin">Origin:</label>
        <select v-model="origin" name="origin" id="origin">
            <option value="">Select option</option>
            <option value="SYD">Sydney</option>
            <option value="MEL">Melbourne</option>
            <option value="SIN">Singapore</option>
            <option value="SFO">San Francisco</option>
        </select>
        &nbsp; &nbsp;
        <label for="Origin">Destination:</label>
        <select v-model="destination" name="destination" id="destination">
            <option value="">Select option</option>
            <option value="SYD">Sydney</option>
            <option value="MEL">Melbourne</option>
            <option value="SIN">Singapore</option>
            <option value="SFO">San Francisco</option>
        </select>
        <div>
            <button v-on:click="submitSearch()">
                Search Flight
            </button>
        </div>
    </div>
</template>

<script>

export default{
  name: 'FlightSearch',
  data () {
    // This is our state object, as in React... but it's called 'data'
    // However we never refer to the 'data' key directly; in vue you
    // access the state keys directly on the instace (this)  sample: this.origin and not this.data.origin
    return {
      origin: 'SYD',
      destination: 'MEL'
    }
  },
  methods: {
    submitSearch () {
      console.log('router', this.$router)
      this.$router.push({
        name: 'SearchResults',
        params: {
          origin: this.origin,
          destination: this.destination
        }
      })
    }
  }
}
</script>

<style scoped>
    div{
        padding:10px
    }
</style>
