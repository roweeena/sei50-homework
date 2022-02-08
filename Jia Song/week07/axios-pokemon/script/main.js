const searchForm = document.querySelector(".search-container form");
const searchInput = document.querySelector(".search-container input");


const fetchPokemons = () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=30`

  axios.get(url)
    .then(res => renderPokemons(res.data.results))
    .catch(err => console.log(err));
}


const fetchPokemonInfo = async (searchTerm) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
  let data;

  try {
    data = await axios.get(url).then(res => res.data);
  }catch(err) {
    data = false;
    console.log(err);
  }finally {
    return data;
  }
}


const renderPokemons = (data) => {
  // 1. clean the result container
  const resultContainer = document.querySelector(".result-container");
  resultContainer.innerHTML = '';

  // 2. create a list tag
  const list = document.createElement("ul");
  resultContainer.append(list);

  // 3. create list items by iterating data 
  data.forEach( async(item) => {

    const pokemonData = await fetchPokemonInfo(item.name);

    const listItem = document.createElement('li');
    list.append(listItem);
  
    listItem.innerHTML = `
      <img src="${pokemonData.sprites.front_default}" alt="">
      <div class="text-container">
        <h3>${pokemonData.name}</h3>
      </div>
    `;

    // 4. create button to trigger fetch movie info
    const moreBtn = document.createElement("button");
    moreBtn.innerHTML = "See more info";
    moreBtn.addEventListener("click", () => renderPokemonInfo(pokemonData.id));
    listItem.append(moreBtn);
  });
}


const renderPokemonInfo = async(id) => {
  // 1. get info data
  const data = await fetchPokemonInfo(id);

  // 2. clean the result container
  const infoContainer = document.querySelector(".info-container");
  infoContainer.innerHTML = '';
  infoContainer.classList.add("active");

  // 3. create a section
  const section = document.createElement("section");
  infoContainer.append(section);

  // 4. create pokemon info
  section.innerHTML = `
    <img src="${data.sprites.front_default}" alt="">
    <div class="text-container">
      <h3>${data.name}</h3>
    </div>
  `;
}

fetchPokemons();

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  renderPokemonInfo(searchInput.value);
});

