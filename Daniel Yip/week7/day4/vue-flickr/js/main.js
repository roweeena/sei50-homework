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
    showResults: true,
    singleShow: false,
    singleUrl: ''

  },
  methods: {
    loadSearchResults: async function(pageNum){
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
        console.log(res);
        this.makeURLs(res)

      } catch (err) {
        console.log('AJAX SEARCH ERROR: ', err);
      }
    },

    makeURLs: function (res) {
      res.data.photos.photo.forEach(photo => {
        this.imageUrlList.push({
          url: `${FLICKR_IMAGE_URL}${photo.server}/${photo.id}_${photo.secret}_q.jpg`,
          title: photo.title,
          id: photo.id
        })
      });
    },

    imageClickHandler: function(id){
      this.showResults = false;
      this.singleShow = true;
      console.log(id);
    },

    closeSingle: function () {
      this.showResults = true;
      this.singleShow = false;
    }
    
  },



})



// document.querySelector('input').focus()


