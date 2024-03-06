const pokemonList = document.querySelector("#pokemonList")
const loadMoreButton = document.querySelector("#loadMoreButton")
const cardPokemonPreview = document.querySelector("#card-pokemon")

const maxRecords = 151
const limit = 20;
let offset = 0;


function printAllCards(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}" id="detail" onclick="cardPokemon(numberPokemon=${pokemon.number})" data-pokemon="p-1"}> 
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


// ____________________________________________________________________________


// function montaCards(pokemon) {

//     return console.log(pokemon);
// }



function cardPokemon(numberPokemon) {
    card.style.display = "flex"
    const infoCards = `
    <section class="preview active" data-target="p-1">
            <header class="header">
                <nav class="header-card">
                    <span class="return">X</span>
                    <span class="number">${numberPokemon}</span>
                </nav>
                <h3 class="name">Tati</h3>
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <div class="center">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        class="img-card" alt={pokemon.name}>
                </div>
            </header>

            <section class="body-card">
                <nav class="nav-bar">
                    <ul class="nav">
                        <li><a href="#" class="active">About</a></li>
                        <li><a href="#">Base Stats</a></li>
                        <li><a href="#">Evolution</a></li>
                        <li><a href="#">Moves</a></li>
                    </ul>
                </nav>
                <main class="main-card">
                    <article class="info-card1">
                        <span class="">Species</span>
                        <span class="">Height</span>
                        <span class="">Weight</span>
                        <span class="">Abilities</span>

                        <p class="stronger">Breeding</p>
                        <span class="conteudo">Gender</span>
                        <span class="conteudo">Egg Groups</span>
                        <span class="conteudo">Egg Cycle</span>
                    </article>
                    <article class="info-card2">
                        <span class="">Seed</span>
                        <span class="">2'3.6 (0.70cm)</span>
                        <span class="">15.2 lbs (6.9kg)</span>
                        <span class="">Overgrow, Chiorphyl</span>

                        <p class="stronger">&nbsp</p>
                        <span class="conteudo">Masculino</span>
                        <span class="conteudo">Monster</span>
                        <span class="conteudo">Grass</span>
                    </article>
                </main>
            </section>
        </section>`

    cardPokemonPreview.innerHTML = infoCards

}
