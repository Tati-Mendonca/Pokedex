const pokemonList = document.querySelector("#pokemonList")
const loadMoreButton = document.querySelector("#loadMoreButton")

const maxRecords = 151
const limit = 20;
let offset = 0;


function convertPokemonToHTML(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join("")}
            </ol>
            <img src="${pokemon.photo}"
            alt="${pokemon.name}">
    </div>
</li>`
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHTML).join("")
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener("click", () => {
    offset += limit
    const qtdRecord = offset + limit

    if (qtdRecord >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})




