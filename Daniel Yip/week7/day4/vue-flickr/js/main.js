console.log('Main JS!', Vue);


const FLICKR_API_KEY = "2f5ac274ecfac5a455f38745704ad084";
const FLICKR_BASE_URL = "https://api.flickr.com/services/rest";
const FLICKR_IMAGE_URL = "https://live.staticflickr.com/";
let pageCount;


const vueApp = new Vue({
  el: '#app',
  
  data: {
    searchText: "ocean coral",
    numResults: 0,
    imageUrlList: [],
    showResults: false,
    singleShow: false,
    loading: false,
    singleUrl: '',
    singleTitle: '',
    singleDescription: '',

  },
  methods: {
    loadSearchResults: async function(pageNum){
      this.showResults = false;
      this.singleShow = false;
      this.loading = true;
      console.log('loadSearchResults');
      try {
        const res = await axios.get(FLICKR_BASE_URL, {
          params: {
            method: "flickr.photos.search",
            api_key: FLICKR_API_KEY,
            format: "json",
            nojsoncallback: 1,
            safe_search: 1,
            text: this.searchText,
            page: pageNum
          }
        })
        // console.log(res);
        this.addToImageUrlList(res)
        this.loading = false;
        this.showResults=true;

      } catch (err) {
        console.log('AJAX SEARCH ERROR: ', err);
      }
    },

    addToImageUrlList: function (res) {
      res.data.photos.photo.forEach(photo => {
        this.imageUrlList.push({
          url: `${FLICKR_IMAGE_URL}${photo.server}/${photo.id}_${photo.secret}_q.jpg`,
          title: photo.title,
          id: photo.id
        })
      });
    },

    loadSingleResult: async function (id) {

      this.showResults = false;
      this.singleShow = false;
      this.loading = true;

      try {
        const res = await axios.get(FLICKR_BASE_URL, {
          params:{
            method: "flickr.photos.getInfo",
            api_key: FLICKR_API_KEY,
            format: "json",
            nojsoncallback: 1,
            photo_id: id
          }
        })
      
        this.showSingleImage(res)
        this.singleShow = true;
        this.loading = false;

      } catch (err) {
        console.log('LOAD SINGLE AXIOS ERROR', err);
      }
    },

    showSingleImage: function (res) {
      const photo = res.data.photo;
      this.singleUrl = `${FLICKR_IMAGE_URL}${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
      this.singleDescription = photo.description._content;
      this.singleTitle = photo.title._content;
    },

    closeSingle: function () {
      this.showResults = true;
      this.singleShow = false;
    },
    
  },

})



// document.querySelector('input').focus()


