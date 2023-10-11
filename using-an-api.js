
/***** LEGO *****/

const onFetchLegoClick = async () => {
    const data = await fetchLegoColors()
    renderLegoColors(data)
}

async function fetchLegoColors() {
    const response = await fetch("https://rebrickable.com/api/v3/lego/colors/?page_size=10&key=" + API_KEY)
    const data = await response.json()
    return data.results
}

// Renders the lego colors in spans with the color as the background color
const legoContainer = document.getElementById("lego-container")
function renderLegoColors(data) {
    legoContainer.innerHTML = data.map(color => `
        <span 
            class="text-white p-1 m-1 d-inline-block" 
            style="background-color: #${color.rgb}"
        >
            ${color.name}
        </span>`
    ).join("") 
}


/***** MOVIES *****/

async function onFetchMovieClick() {
    const data = await fetchMovie()
    renderMovie(data)
}

async function fetchMovie() {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&type=movie&t=Empire+Strikes+Back`)
    const data = await response.json()
    return data
}

// Renders the movies as a div with the title and the plot
const movieContainer = document.getElementById("movie-container")
function renderMovie(movie) {
    movieContainer.innerHTML = `
        <div>
            <img class="img-thumbnail" src="${movie.Poster}"/>
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
            <img 
                class="img-thumbnail" 
                src="${pokemonData.sprites.front_default}"
            />
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