console.log("hello");

const fetchSearchResults = function (searchText) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  axios
    .get(url)
    .then(function (response) {
      // console.log(response.data.meals);
      displaySearchResults(response.data.meals);
    })
    .catch(function (err) {
      console.log("PROBLEM", err);
    });
};

const displaySearchResults = function (meals) {
  let list = `<section id="search-results-container">`;

  meals.forEach((meal) => {
    // console.log(meal.strMeal);
    list += `
      <article class="meal" data-meal-id="${meal.idMeal}">
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200">
      </article>
    `;
  });

  list += "</section>";

  $("#content-wrapper").append(list);

  $(".meal").on("click", function () {
    const mealID = $(this).data("meal-id");
    fetchIndividualMeal(mealID);
  });
};

const fetchIndividualMeal = function (id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  axios
    .get(url)
    .then(function (res) {
      const meal = res.data.meals[0];
      // console.log(meal);
      displayIndividualMeal(meal);
    })
    .catch(function (err) {
      console.log(err);
    });
};

const displayIndividualMeal = function (meal) {
  $("#search-results-container").hide();

  let recipe = `<article id="recipe">
    <h2><a href="${meal.strYoutube}" target="blank">${meal.strMeal}</a></h2>
    <button id="back">Back</button>
    <div id="instructions-wrapper">
      <img src="${meal.strMealThumb}" alt="${
    meal.strMeal
  }" width="300" height="300">
      <ol><h2>Instructions</h2>${processInstructions(meal.strInstructions)}</ol>
    </div>
  `;

  $("#content-wrapper").append(recipe);

  $("#back").on("click", function () {
    $("#recipe").remove();
    $("#search-results-container").show();
  });
};

const processInstructions = function (instructions) {
  console.log(instructions);
  const array = instructions.split("\r\n").filter(Boolean); // WHY DOES THIS 'Boolean' WORK AS A FUNCTION???
  console.log(array);
  let list = "";

  array.forEach((step) => {
    list += `
      <li>
        ${step}
      </li>
    `;
  });

  return list;
};

$("#search-form").on("submit", function (e) {
  e.preventDefault();
  query = $("#search-input").val();
  $("#content-wrapper").empty();
  fetchSearchResults(query);
});
