const pokeApi = {}

function convertPokeApiDetailToPokemon(pokemonDetail) {

    const pokemon = new Pokemon()

    pokemon.number = pokemonDetail.id
    pokemon.name = pokemonDetail.name
    pokemon.height = pokemonDetail.height * 10
    pokemon.weight = pokemonDetail.weight / 10
    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default

    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    const abilities = pokemonDetail.abilities.map((typeSlot) => typeSlot.ability.name)
    const [ability] = abilities
    pokemon.abilities = abilities
    pokemon.ability = ability

    if (pokemonDetail.sprites.back_female == null) {
        pokemon.sprites = "male"
    } else {
        pokemon.sprites = "female"
    }

    return pokemon
}

function loadSpecie(specie) {

    const pokemon = new Pokemon()

    pokemon.name = specie.name
    pokemon.number = specie.id
    pokemon.shape = specie.shape
    pokemon.habitat = specie.habitat

    const egg_groups = specie.egg_groups.map((slot) => slot.name)
    const [egg_group] = egg_groups
    pokemon.egg_groups = egg_groups
    pokemon.egg_group = egg_group

    return pokemon
}

pokeApi.getPokemonSpecie = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(loadSpecie)
}

pokeApi.getPokemonDetail = (pokemon) => {

    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getSpecies = (id = 1, limit = 151) => {
    let url = `https://pokeapi.co/api/v2/pokemon-species?id=${id}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonSpecie))
        .then((detailRequests) => Promise.all(detailRequests))
}

pokeApi.getPokemons = (offset = 0, limit = 151) => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

