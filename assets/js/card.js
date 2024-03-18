const cardPokemonPreview = document.querySelector("#card-pokemon")
const card = document.querySelector(".card-pokemon")

window.closeCard = () => {
    let classCard = document.querySelector(".preview")
    classCard.classList.remove("active")
    card.style.display = "none"
};


function clickCard(pokeNumber) { //numero clicado
    card.style.display = "flex"


    pokeApi.getPokemons().then((pokemonsCard = []) => {
        console.log(pokemonsCard);
        let pegarNumeros = pokemonsCard.map((i) => {
            return i.number;
        })



        pegarNumeros.forEach((numero) => {
            if (numero === pokeNumber) {
                imprimeCard(pokemonsCard[numero - 1])
                let info = pokemonsCard[numero - 1]
                console.log(info);

            }
        })
    })

}



function imprimeCard(pokeNumber) {
    console.log(pokeNumber); // ta chegando tudo como indefinido (eggs)
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
                <span>${pokeNumber.shape}</span>



                <span>${pokeNumber.height} m</span>
                <span>${pokeNumber.weight} kg</span>
                    <ol class="group-abilities">${pokeNumber.abilities.map((ability) => `<li class="ability ${pokeNumber.ability}"
                            >${ability}</li>`).join(",&nbsp")}</ol>
                <p class="stronger">&nbsp</p>
                <span class="conteudo">${pokeNumber.sprites}</span>
                <span class="conteudo">${pokeNumber.egg_group}</span>





                <span class="conteudo">${pokeNumber.type}</span>
            </article >
        </main >
    </section >
    </section > `

    // console.log(pokeNumber.stats);
    cardPokemonPreview.innerHTML = cardPokemon
}

