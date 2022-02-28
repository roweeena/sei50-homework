<template>
  <div>
        <h2>
            Search Results
            {{origin}}
            {{destination}}
        </h2>
  </div>
</template>

<script>
export default {
  name: 'FlightSearchResults',
  props: ['origin', 'destination']
}
</script>

<style>

</style>
