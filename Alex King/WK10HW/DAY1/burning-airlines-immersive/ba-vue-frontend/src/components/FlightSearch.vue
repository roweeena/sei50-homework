<template>
    <div>

        <h2> SEARCH FLIGHTS </h2>

        <label>Origin:</label>
        <select v-model='origin'>
            <option value=""></option>
            <option value="SYD">SYD</option>
            <option value="MEL">MEL</option>
            <option value="SIN">SIN</option>
            <option value="SFO">SFO</option>

        </select>

        &nbsp; &nbsp;

        <label>Origin:</label>
        <select v-model="destination">
            <option value=""></option>
            <option value="SYD">SYD</option>
            <option value="MEL">MEL</option>
            <option value="SIN">SIN</option>
            <option value="SFO">SFO</option>

        </select>
        &nbsp; &nbsp;

        <button @click = "submitSearch">Search</button>

    </div>

</template>

<script>
export default {
    name: 'FlightSearch',
    data(){
        return{
            origin: 'SYD',
            destination: 'MEL',
        }
    },
    methods:{
        submitSearch(){
            console.log('hihi')
            this.$router.push({
                name:'SearchResults',
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

</style>