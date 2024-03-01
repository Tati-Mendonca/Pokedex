const pokemonList = document.querySelector("#pokemonList")
const loadMoreButton = document.querySelector("#loadMoreButton")

const maxRecords = 151
const limit = 20;
let offset = 0;


function printAllCards(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}" id="detail" onclick="cardPokemon()" data-pokemon="p-1"}>
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
        pokemonList.innerHTML += newHtml //imprime os cards no HTML
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



function previewCard(pokemon) {
    return `        
    <div class="preview active" data-target="p-1"> <!-- class active -->
        <p class="btn-close">X</p>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        class="img" alt={pokemon.name}>
        <h3>pokemon.name</h3>
            <div>
                <span class=" conteudo" asdas</span>
                <span class="conteudo">asdasd</span>
                <span class="conteudo">17542</span>
                <span class="conteudo">55</span>
                <span class="conteudo">0</span>
                <span class="conteudo">hkh</span>
                <span class="conteudo">2</span>
            </div>
</div>`
}


// let card = document.querySelector(".card-pokemon")
//FAZER O FOREACH EM POKEMON
function cardPokemon() {
    card.style.display = "flex"
}
