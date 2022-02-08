console.log("hello");

const fetchSearchResults = function (searchText) {

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

  axios.get(url)
    .then(function (response) {
    console.log(response.data.meals);
    displaySearchResults(response.data.meals)
    })
    .catch(function (err) {
      console.log('PROBLEM', err);
    })

};

const displaySearchResults = function (meals) {
  
  let list = '<section id=#search-results-container>'
  
  meals.forEach(meal => {
    console.log(meal.strMeal);
    list += `
      <article class="meal">
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200">
      </article>
    `
  });

  list += '</div>'

  $("#content-wrapper").append(list)

};

const fetchIndividualMeal = function (id) {};

const displayIndividualMeal = function (meal) {};



$("#search-form").on("submit", function(e){
  e.preventDefault()
  query = $("#search-input").val()
  fetchSearchResults(query)
});
