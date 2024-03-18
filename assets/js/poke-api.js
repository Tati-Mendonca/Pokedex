const pokeApi = {} //esse objeto vai representar a nossa API

function convertPokeApiDetailToPokemon(pokemonDetail) { //função tras as info da API
    console.log(pokemonDetail);
    const pokemon = new Pokemon()

    pokemon.number = pokemonDetail.id
    pokemon.name = pokemonDetail.name

    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.height = pokemonDetail.height
    pokemon.weight = pokemonDetail.weight

    pokemon.sprites = pokemonDetail.sprites

    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default

    const abilities = pokemonDetail.abilities.map((typeSlot) => typeSlot.ability.name)
    const [ability] = abilities

    pokemon.abilities = abilities
    pokemon.ability = ability


    //     pokemon.shape = pokemonsDetails.shape
    //     pokemon.habitat = pokemonsDetails.habitat

    // console.log(api);
    return pokemon
}


// //LISTA DE OBJETOS POKEMONS + URL
pokeApi.getPokemonDetail = (pokemon) => {
    //  console.log(pokemon); //Objeto com nome e url só
    //  console.log(pokemon.url); // https://pokeapi.co/api/v2/pokemon/1/
    return fetch(pokemon.url)
        .then((response) => response.json()) //fulfilled
        .then(convertPokeApiDetailToPokemon)
    //.then(loadSpecie)
}



pokeApi.getPokemons = (offset = 0, limit = 151) => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results) //Array com objetos que contém [20 nomes e url]
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        //.then((pokemons) => pokemons.map(pokeApi.getSpecieDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
    //.then((data) => console.log(data))
}

