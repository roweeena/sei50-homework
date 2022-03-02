<template>
  <div>
    <h2>Search Flights</h2>

    <label for="">Origin</label>
    <select v-model='origin'>
      <option value="">Please Select:</option>
      <option value="SYD">SYD</option>
      <option value="MEL">MEL</option>
      <option value="SIN">SIN</option>
      <option value="SFO">SFO</option>
    </select>
    
    &nbsp; &nbsp;

    <label for="">Destination</label>
    <select v-model='destination'>
      <option value="">Please Select:</option>
      <option value="SYD">SYD</option>
      <option value="MEL">MEL</option>
      <option value="SIN">SIN</option>
      <option value="SFO">SFO</option>
    </select>

    &nbsp; &nbsp;
    
    <button @click="submitSearch">Search</button>

  </div>

</template>

<script>
export default {
  name: 'FlightSearch',
  data(){
    return {
      origin: 'SYD',
      destination: 'MEL',
    };


    
  },
  methods:{
    submitSearch(){
      console.log('search');

      this.$router.push({
        name: 'SearchResults',
        params: {
          origin: this.origin,
          destination: this.destination
        }
      });

    }

  }
}

</script>



<style scoped>

</style>
