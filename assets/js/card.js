const cardPokemonPreview = document.querySelector("#card-pokemon")
const card = document.querySelector(".card-pokemon")

window.closeCard = () => {
    let classCard = document.querySelector(".preview")
    classCard.classList.remove("active")
    card.style.display = "none"
};

function clickCard(pokeNumber) {
    card.style.display = "flex"

    pokeApi.getPokemons().then((pokemonsCard = []) => {
        let id = pokemonsCard.map((i) => {
            return i.number;
        })
        id.forEach((numero) => {
            if (numero === pokeNumber) {
                imprimeCard(pokemonsCard[numero - 1])
                pokemonsCard[numero - 1]
            }
        })
    })

    pokeApi.getSpecies().then((pokemonsCardSpecie = []) => {
        let id = pokemonsCardSpecie.map((i) => {
            return i.number
        })
        id.forEach((numero) => {
            if (numero === pokeNumber) {
                imprimeSpecieinTheCard(pokemonsCardSpecie[numero - 1])
            }
        })
    })
}


function imprimeCard(pokeNumber) {
    const cardPokemon =
        `<section class="preview active  ${pokeNumber.type}" data-target="p-1">
    <header class="header">
        <nav class="header-card">
            <button onclick="closeCard()" class="return">X</button>
            <span class="number">${pokeNumber.number}</span>
        </nav>
        <h3 class="name">${pokeNumber.name}</h3>
            <ol class="types">
                ${pokeNumber.types.map((type) =>
            `<li class="type ${pokeNumber.type}"
                >${type}</li>`).join("")}
            </ol>
        <div class="center">
            <img src="${pokeNumber.photo}"
                class="img-card" alt=${pokeNumber.name}>
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
                <span>Species</span>
                <span>Height</span>
                <span>Weight</span>
                <span>Abilities</span>

                <p class="stronger">Breeding</p>
                <span>Gender</span>
                <span>Egg Groups</span>
                <span>Egg Cycle</span>
            </article>
            <article class="info-card2">
                <span id="species">${pokeNumber.shape}</span>
                <span>${pokeNumber.height} Cm</span>
                <span>${pokeNumber.weight} kg</span>
                    <ol class="group-abilities">${pokeNumber.abilities.map((ability) => `<li class="ability ${pokeNumber.ability}"
                            >${ability}</li>`).join(",&nbsp")}</ol>
                <p class="stronger">&nbsp</p>
                <span class="conteudo">${pokeNumber.sprites}</span>
                <span id="egg_group">${pokeNumber.egg_group}</span>

                <span class="conteudo">${pokeNumber.type}</span>
            </article >
        </main >
    </section >
    </section > `
    cardPokemonPreview.innerHTML = cardPokemon
}

function imprimeSpecieinTheCard(specie) {
    document.querySelector("#species").innerHTML = specie.shape.name
    document.querySelector("#egg_group").innerHTML = specie.egg_group
}


