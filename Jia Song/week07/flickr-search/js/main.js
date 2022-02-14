// general function for data fetching
// this function will return a promise
const fetchAPI = (params) => {
  const API_KEY = '2f5ac274ecfac5a455f38745704ad084';
  const baseUrl = `https://www.flickr.com/services/rest`

  return axios.get(baseUrl, {
      params: {
        api_key: API_KEY,
        format: 'json',
        nojsoncallback: 1,
        ...params
      }
    })
    .then(res => res.data)
    .catch((err) => {
      console.log(`err: ${err}`);
      return false;
    });
}


const fetchSearchResult = async (searchTerm, page) => {
  const data = await fetchAPI({
    method: 'flickr.photos.search',
    text: searchTerm,
    sort: 'interestingness-desc',
    per_page: 24,
    page: page || 1
  });

  if(!data || data.photos.photo.length === 0) {
    // if there is no search result,
    renderEmptyResult(searchTerm);
  } else {
    renderSearchResult(data.photos, searchTerm);
  }
}


const fetchInfo = async (photoID, secret) => {
  const data = await fetchAPI({
    method: 'flickr.photos.getInfo',
    photo_id: photoID,
    secret: secret
  });

  data ? renderInfo(data.photo) : renderEmptyResult();
}


const renderSearchResult = (data, searchTerm) => {
  // 1. clean the result container
  const resultContainer = document.querySelector("#result-container");
  resultContainer.innerHTML = '';

  // 2. create ul element
  const resultList = document.createElement("ul");
  resultList.id = "result-list";
  resultContainer.append(resultList)

  // 3. create result item by iterating array of data
  data.photo.forEach(async (item) => {
    const imagePath = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_q.jpg`;

    // 3-1. create <li> 
    const listItem = document.createElement("li");
    resultList.append(listItem);

    listItem.innerHTML = `
      <img src="${imagePath}" alt=""/>
    `
    // 3-2. attach a event listener
    listItem.addEventListener("click", () => {
      fetchInfo(item.id, item.secret);
    })
  });

  // 4. create pagination
  // 4-1. get current page and total page
  const currentPage = data.page;
  const totalPages = data.pages;

  // 4-2. create pagination scope
  const firstPagination = currentPage - 3 > 0 ? currentPage - 3 : 1;
  const lastPagination = firstPagination + 6 > totalPages ? totalPages : firstPagination + 6;

  // 4-3. create HTML element
  const resultPagination = document.createElement("div");
  resultPagination.id = "result-pagination"
  resultContainer.append(resultPagination);

  for(let i=firstPagination; i<=lastPagination; i++) {
    const button = document.createElement("button");
    button.innerHTML = i;
    currentPage === i && button.classList.add("active");
    resultPagination.append(button);

    // 4-4. attach click event listener
    button.addEventListener("click", () => {
      fetchSearchResult(searchTerm, i);
    })
  }
}


const renderInfo = (data) => {
  const imagePath = `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_q.jpg`;

  const infoContainer = document.querySelector("#info-container");
  infoContainer.classList.add("active");

  const infoInnerbox = document.querySelector("#info-innerbox");
  infoInnerbox.innerHTML = `
    <img src="${imagePath}" alt="">
    <h2>${data.title._content}</h2>
    <p>by ${data.owner.username}</p>
    <p>Description: ${data.description._content}</p>
    <p>Date: ${data.dates.taken}</p>
  `;
}


const renderEmptyResult = (searchTerm) => {
  const resultContainer = document.querySelector("#result-container");
  resultContainer.innerHTML = `
    <p>There is no result of "${searchTerm}"</p>
  `;
}


// form submit event listener
const searchForm = document.querySelector("#form-container form");
const searchInput = document.querySelector("#form-container input");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchSearchResult(searchInput.value);
})

// modal close button event listener
const closeBtn = document.querySelector("#closeBtn");

closeBtn.addEventListener("click", () => {
  document.querySelector("#info-container").classList.remove("active");
})