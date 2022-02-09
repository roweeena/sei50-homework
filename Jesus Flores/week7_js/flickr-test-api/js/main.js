//https://api.flickr.com/services/rest?method=flickr.photos.search&format=json&nojsoncallback=1&text=ocean+coral&api_key=2f5ac274ecfac5a455f38745704ad084

// document.addEventListener('DOMContentLoaded', getData);


const FLICKR_API_KEY = '';
const FLICK_BASE_URL = 'https://api.flickr.com/services/rest';
const gridSearch = document.querySelector('.grid-search');
const loader = document.querySelector("#loading");
const gridInfo = document.querySelector('.grid-info');

let currentSearch = '';
const pagination = { page: 1 }

window.addEventListener('load', (event) => {
    //Setting default styles form divs 
    loader.style.display = "none";
    gridSearch.style.display = "grid";
    gridInfo.style.display = "none"
     //Sroll Paginatination check if bottom we fetch again

     //On Scroll pagination, don't forget the throttle 
     window.addEventListener('scroll', function(){
        if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight)) {
            toggleLoader(); //Toggle loading effect
            pagination.page++
            getResults();
            now = new Date().getTime();
        }
    });

    //Api call to get  all results from search
    const getResults = function (){
        console.log('again resulsts?');
        axios.get(FLICK_BASE_URL, {
            params: {
                api_key: FLICKR_API_KEY,
                method: 'flickr.photos.search',
                format: 'json',
                nojsoncallback: 1,
                text: currentSearch,
                page: pagination.page
            }
        })
        .then(function(res){
            renderResults(res.data.photos.photo);
            toggleLoader();
        })  
        .catch(function(error){
            console.log(error);
        })
   }   

   //Api call to get info from photo
   const getPhoto = function (photo){
        toggleLoader();
        axios.get(FLICK_BASE_URL, {
            params: {
                api_key: FLICKR_API_KEY,
                method: 'flickr.photos.getInfo',
                format: 'json',
                photo_id: photo, 
                nojsoncallback: 1,
            }
        })
        .then(function(res){
            renderPhoto(res.data.photo);
        })  
        .catch(function(error){
            console.log(error);
        })
    }   


    //We get set class and id for each photo to be able to search for them in the api
    const getPhotoInfo = function(){
        const photos = document.querySelectorAll(".show-img")
        photos.forEach(function(item){
            item.addEventListener("click",function(){
                const id =  item.getAttribute('photo-id');
                getPhoto(id);
            })
        })
    }
    

    //Render photo of get photo api
    const renderPhoto = function(photo){
        gridSearch.style.display = 'none';
        gridInfo.style.display = 'grid';
        gridInfo.innerHTML = `
            <div> <img src="https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg" />  </div>
            <div>  
                <h3> ${photo.title._content} </h3> 
                <p> ${photo.description._content === "" ? "No description" : photo.description._content  } </p>
                <p> <strong>By: </strong> ${photo.owner.username} </p>
                <p><button id="go-back" class="btn" >Back</button> </p>
            </div>
        `;
        toggleLoader();
        goBack();
    }

    //Render result of search data api
    const renderResults = function(photos){
        photos.forEach(value => {
            const img = document.createElement('img');
            //https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
            img.src = `https://live.staticflickr.com/${value.server}/${value.id}_${value.secret}_q.jpg`
            img.classList.add('show-img');
            img.setAttribute("photo-id", value.id);
            gridSearch.appendChild(img)
        });
         getPhotoInfo();
    }   

    //Search input and get data from the api
    const getSearch = function(){
        const form = document.querySelector("#searchForm");
        form.addEventListener('submit',function(event){
            event.preventDefault();
            toggleLoader();
            const searchTerm = document.querySelector("#searchInput").value;
            if(currentSearch !== "" &&  searchTerm !== currentSearch){
                clearBody();
                pagination.page = 0;
            }
            currentSearch = searchTerm;
            if(gridInfo.style.display === 'grid'){
               gridInfo.style.display = 'none';
               gridSearch.style.display = 'grid';
            }
            getResults();
        })
    }


    //Toggles loader
    const toggleLoader = function(){
        loader.style.display = loader.style.display === "none" ? "block" : "none";
    }

    //Toggle grids beteween all and show photo
    const goBack = function(){
        const goBack = document.querySelector('#go-back');
        goBack.addEventListener('click', function(){
            gridSearch.style.display = 'grid';
            gridInfo.style.display = 'none';
        })
    }


    //Clear Body on new search
    const clearBody = function() {
        gridSearch.innerHTML  = "";
    }

   
    getSearch();

});

   
