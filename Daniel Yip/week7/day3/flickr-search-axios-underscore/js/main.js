console.log("main.js");

const FLICKR_API_KEY = "2f5ac274ecfac5a455f38745704ad084";
const FLICKR_BASE_URL = "https://api.flickr.com/services/rest";
const FLICKR_IMAGE_URL = "https://live.staticflickr.com/";


$(function () {
  const $page = $("#page-wrapper");
  let pageCount

  const loadSearchResults = function (searchText, pageNum) {
    axios
      .get(FLICKR_BASE_URL, {
        params: {
          // axios will combine these key-value pairs into the query string for us
          method: "flickr.photos.search",
          api_key: FLICKR_API_KEY,
          format: "json",
          nojsoncallback: 1,
          safe_search: 1,
          text: searchText,
          page: pageNum
        },
      })
      .then(function (res) {
        const array = res.data.photos.photo;
        makeResultsPage(array)
      })
      .catch(function (err) {
        console.log("AJAX Search error", err);
      });
  };

  const makeSinglepage = function (queryString, title) {
    $page.append(`<div id="single-photo">
                    <img src="${FLICKR_IMAGE_URL + queryString}_b.jpg" alt="${title}">
                  </div>`);
  };

  const makeResultsPage = function (arr) {

    const contents = arr.reduce((acc, photoObj) => {
      const queryString = const makeResultsPage = function (arr) {

        const contents = arr.reduce((acc, photoObj) => {
          const queryString = `${photoObj.server}/${photoObj.id}_${photoObj.secret}`;
          const title = `${photoObj.title}`;
          const image = `<img 
          src="${FLICKR_IMAGE_URL}${queryString}_q.jpg" 
          alt="${title}" 
          class="thumbnail" 
          data-query-string="${queryString}" 
          data-title="${title}"
          >`;
          return acc + image;
        }, "");
        
        $('.results-wrapper').append(contents);
      }
      const title = `${photoObj.title}`;
      const image = `<img 
      src="${FLICKR_IMAGE_URL}${queryString}_q.jpg" 
      alt="${title}" 
      class="thumbnail" 
      data-query-string="${queryString}" 
      data-title="${title}"
      >`;
      return acc + image;
    }, "");
    
    $('.results-wrapper').append(contents);
  }

  $("#search-form").on("submit", function (e) {
    pageCount = 1
    e.preventDefault();
    $page.empty()
    $page.append(`<div class="results-wrapper"></div>`)
    loadSearchResults($("#search-input").val(), pageCount++ );
  });

  $page.on("click", ".thumbnail", function () {
    $('.results-wrapper').addClass('hide')
    makeSinglepage($(this).data("query-string"), $(this).data("title"));
  });
  
  $page.on("click", "#single-photo", function () {
    $('#single-photo').remove()
    $(".results-wrapper").removeClass('hide')
  });

  $(window).scroll(function(){
    // console.log('scroll top: ' ,$(window).scrollTop());
    // console.log('document height: ' ,$(document).height());
    // console.log('window height: ' ,$(window).height());

    // console.log($(document).height() - $(window).height());

    if ($(window).scrollTop() === $(document).height() - $(window).height() - 0.5 && !$('.results-wrapper').hasClass('hide')){
      // console.log('MORE');
      loadSearchResults($("#search-input").val(), pageCount++ )
      // console.log(pageCount);
    }
    
  });  

}); // document ready


