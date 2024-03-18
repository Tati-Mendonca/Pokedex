class Pokemon {
    name;
    number;
    types = [];
    type;
    photo;
    habitat;
    egg_groups = [];
    egg_group;
    shape;

}


// function clickCard(pokeNumber) { //numero clicado
//     card.style.display = "flex"


//     pokeApi.getPokemons().then((pokemonsCard = []) => {
//         // console.log(pokemonsCard); // info indefinida aqui tbm
//         // let pegarNumeros = pokemonsCard.map((i) => {
//         //     return i.number;
//         // })
//         // let pegarDados = pokemonsCard.map((i) => {
//         //     let pokemonx = i
//         //     tudo(i)
//         //     if (pokemonx.habitat === undefined) {
//         //         pokeApi.getSpecie().then((pokeSpecies = []) => {
//         //             let pegarDadosPlus = pokeSpecies.map((i) => {
//         //                 return tudo(i)
//         //             })

//         //         })
//         //     }
//         // })


//         // pegarNumeros.forEach((numero) => {
//         //     if (numero === pokeNumber) {
//         //         imprimeCard(pokemonsCard[numero - 1])
//         //         let info = pokemonsCard[numero - 1]
//         //         console.log(info);

//         //     }
//         // })
//     })


//     const tudo = function (data) {
//         //  console.log(data)
//         const result = Object.assign({}, data);
//         imprimeCard(result)
//         //  return console.log(result);
//     }


//     pokeApi.getPokemons().then((pokemonsCard = []) => {
//         //console.log(pokemonsCard); // info indefinida aqui tbm
//         let pegarNumeros = pokemonsCard.map((i) => {
//             return i.number
//         })
//         pegarNumeros.forEach((numero) => {
//             if (numero === pokeNumber) {
//                 // imprimeCard(pokemonsCard[numero - 1])
//                 let info = pokemonsCard[numero - 1]
//                 tudo(info);

//             }
//         })
//     })
//     pokeApi.getSpecie().then((pokeSpecies = []) => {
//         //   console.log(pokeSpecies); //retorna um array com os ovos
//         let numberpokemon = pokeSpecies.map((i) => {
//             return i.number // retornou os numeros de ovos
//         })
//         numberpokemon.forEach((numberSpecie) => {
//             if (numberSpecie === pokeNumber) {
//                 let plus = pokeSpecies[numberSpecie - 1]
//                 tudo(plus);

//                 // imprimeCard(numberpokemon[numberSpecie - 1])
//             }
//         })
//     })

// }
