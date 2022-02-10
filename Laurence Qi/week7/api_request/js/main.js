

//TODO: add loading div


//TODO: use a Vue component for the iframe.
// Vue.component('')


myApp = new Vue({
    el: '#app',

    data: {
        address: 'hello',
        lat: 0,
        lng: 0,

        title: '',
        nasa_img: '',
        googleURL: '',

        geoCodeClass: 'tab-pane fade show active',
        searchMapsClass: 'tab-pane fade show active',
        show: true,

        geoCodeNavClass: 'nav-link active',
        searchMapsNavClass: 'nav-link'
        
        
    },
    
    methods: {
        generateGeoCodes: async function (e){
            e.preventDefault();

            const URL_ADDRESS = this.address.replaceAll(' ', '+');
            const GOOGLE_KEY = 'AIzaSyAm7vYw4jkC7m9hbEKpMfFxjwLAOZgxwko'

            response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
                params: {
                    address: URL_ADDRESS,
                    key: GOOGLE_KEY
                }
            })
            
            try {
                const coords = response.data.results[0].geometry.location // 12 bowler ave fairfield nsw australia
                console.log(coords);
                this.lat = coords.lat
                this.lng = coords.lng
            } catch (error) {
                console.log('AJAX ERROR:', error);
            }
            


        },

        searchMaps: async function (e){
            e.preventDefault();

            const date = '2018-01-01'// NOTE: this is an arbitrary date, I found that contrary to the docs, any date will not work. NASA API will not find images beyond 5 years from the query date. 
            // const dim = $('#dim').val(); //width and height of image in degrees //FIXME: didn't find how to search for this. 
            const NASA_KEY = 'Y3DDqVZTa23oDDvIuzdp8HotSVQdXVXZ5WmfZ5fs';
            const NASA_BASE_URL = 'https://api.nasa.gov/planetary/earth/assets'
        
            const response = await axios.get( NASA_BASE_URL, {
                params: {
                    lat: this.lat, 
                    lon: this.lng, 
                    date: date, 
                    api_key: NASA_KEY, 
                }
            })
            try {
                this.title = `Photo taken on ${response.data.date}`
                this.nasa_img = response.data.url;
                this.googleURL = `https://www.google.com/maps/embed/v1/view?key=AIzaSyAm7vYw4jkC7m9hbEKpMfFxjwLAOZgxwko&center=${this.lat},${this.lng}&maptype=satellite`
            } catch (error) {
                console.log(error);   
            }
        },

        switchTabs: function (){
            this.show = !this.show

            if (this.show) {
                this.geoCodeNavClass = 'nav-link active'
                this.searchMapsNavClass = 'nav-link'
            }
            else {
                this.geoCodeNavClass = 'nav-link'
                this.searchMapsNavClass = 'nav-link active'
            }
        }
    }
});
