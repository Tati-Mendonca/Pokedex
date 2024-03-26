const pokemonList = document.querySelector("#pokemonList")
const loadMoreButton = document.querySelector("#loadMoreButton")

const maxRecords = 151
let limit = 20;
let offset = 0;

function printAllCards(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}" id="detail" onclick="clickCard(${pokemon.number})" data-pokemon="p-1"}> 
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${pokemon.type}"
                >${type}</li>`).join("")}
            </ol>
            <img src="${pokemon.photo}"
            alt="${pokemon.name}">
    </div>
</li>`
}

function paginationOfCards(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(printAllCards).join("")
        pokemonList.innerHTML += newHtml
    })
}

paginationOfCards(offset, limit)

loadMoreButton.addEventListener("click", () => {
    offset += limit
    const qtdRecord = offset + limit

    if (qtdRecord >= maxRecords) {
        const newLimit = maxRecords - offset
        paginationOfCards(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        paginationOfCards(offset, limit)
    }
})
