const api_key = '24d863d54c86392e6e1df55b9a328755'

const searchForm = document.querySelector(".search-container form");
const searchInput = document.querySelector(".search-container input");

// // using XML to fetch data
// const fetchSearchResult_xhr = (searchTerm) => {
//   const xhr = new XMLHttpRequest();

//   xhr.onload = () => {
//     const data = JSON.parse( xhr.response );
//     // do something with data
//   }
  
//   xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}`);
//   xhr.send(); 
// };


// using fetch function to fetch data
const fetchSearchResult = async (searchTerm) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
}


const fetchMovieInfo = async (movieID) => {
  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${api_key}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}


const drawSearchResult = async (searchTerm) => {
  // 1. get data with searchTerm
  const data = await fetchSearchResult(searchTerm);

  // 2. clean the result container
  const resultContainer = document.querySelector(".result-container");
  resultContainer.innerHTML = '';

  // 3. create a list tag
  const list = document.createElement("ul");
  resultContainer.append(list);

  // 4. create list items by iterating data 
  data.forEach((item) => {
    const poster_path = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;

    const listItem = document.createElement('li');
    list.append(listItem);
  
    listItem.innerHTML = `
      <img src="${poster_path}" alt="">
      <div class="text-container">
        <h3>${item.title}</h3>
        <span>${item.release_date}</span>
        <p>${item.overview}</p>
      </div>
    `;

    // 5. create button to trigger fetch movie info
    const moreBtn = document.createElement("button");
    moreBtn.innerHTML = "See more info";
    moreBtn.addEventListener("click", () => drawMovieInfo(item.id));
    listItem.append(moreBtn);
  });
}


const drawMovieInfo = async (movieID) => {
  // 1. get data with movie id
  const data = await fetchMovieInfo(movieID);

  // 2. clean the result container
  const resultContainer = document.querySelector(".result-container");
  resultContainer.innerHTML = '';

  // 3. create a section
  const section = document.createElement("section");
  resultContainer.append(section);

  // 4. create movie info
  const poster_path = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;

  section.innerHTML = `
    <img src="${poster_path}" alt="">
    <div class="text-container">
      <h3>${data.title}</h3>
      <span>${data.release_date}</span>
      <p>${data.overview}</p>
    </div>
  `;
}


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  drawSearchResult(searchInput.value);
});