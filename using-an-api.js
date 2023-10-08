
/***** LEGO *****/

const onFetchLegoClick = () => {
    const data = fetchLegoColors()
    renderLegoColors(data)
}

function fetchLegoColors() {
    // TODO: get the lego colors from the API
    return []
}

// Renders the lego colors in spans with the color as the background color
const legoContainer = document.getElementById("lego-container")
function renderLegoColors(data) {
    legoContainer.innerHTML = data.results.map(color => `
        <span class="text-white p-1 m-1 d-inline-block" style="background-color: #${color.rgb}">
            ${color.name}
        </span>`
    ).join("") 
}


/***** MOVIES *****/

function onFetchMovieClick() {
    const data = fetchMovie()
    renderMovie(data)
}

function fetchMovie() {
    // TODO: get the movie from the API
    return {}
}

// Renders the movies as a div with the title and the plot
const movieContainer = document.getElementById("movie-container")
function renderMovie(movie) {
    console.log(movie)
    movieContainer.innerHTML = `
        <div>
            <h5>${movie.Title}</h5>
            <p>${movie.Plot}</p>
        </div>
    `
}


/***** POKEMON *****/

// TODO: Fix the bug in this section

const onFetchPokemonClick = async () => {
    const pokemon = await fetchPokemon()
    renderPokemon(pokemon)
}

function fetchPokemon() {
    const response = fetch("https://pokeapi.co/api/v2/pokemon/eevee")
    const data = response.json()
    return data
}

// Renders the pokemon as a div with an image, name, and the base experience
const pokemonContainer = document.getElementById("pokemon-container")
function renderPokemon(pokemonData) {
    pokemonContainer.innerHTML = `
        <div class="text-center">
            <img class="img-thumbnail" src="${pokemonData.sprites.front_default}"/>
            <h5 class="mt-3">${pokemonData.name}</h5>
            <p>Base Experience: ${pokemonData.base_experience}</p>
        </div>
    `
}


/***** MEALS *****/

async function onFetchMealsClick() {
    const mealData = await fetchMeals()
    renderMeals(mealData)
}

// TODO: Complete this function
function fetchMeals() {
    
}

// Renders each meal as a div with the name and the area of the world it's from
const mealsContainer = document.getElementById("meals-container")
function renderMeals(data) {
    mealsContainer.innerHTML = data.meals.map(meal => `
        <div>
            <h5>${meal.strMeal}</h5>
            <p>${meal.strArea}</p>
        </div>
    `).join("")
}