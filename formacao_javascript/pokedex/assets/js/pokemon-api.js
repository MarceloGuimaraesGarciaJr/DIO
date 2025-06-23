
let pokeApi = {}


pokeApi.getPokemonDetails = (pokemons) => { 
     return fetch(pokemons.url)
     .then((response) => response.json())
     .then(pokemonApiToModel)
}

function pokemonApiToModel (pokemonDetails) { 
        const pokemon = new Pokemon() 
        pokemon.name = pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1) 
        const types = pokemon.types = pokemonDetails.types.map(typeSlot => typeSlot.type.name)
        let [type] = types
        pokemon.type = type
        pokemon.order = pokemonDetails.id
        pokemon.photo = pokemonDetails.sprites.other.dream_world.front_default
        return pokemon 
}

//Função inicial que pega a lista de pokemons e faz array de URLs
pokeApi.getPokemonList = (offset, limit) => {

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
   return fetch(url)
    .then((response)=> response.json())
    .then((jsonBody) => jsonBody.results)   
   .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
    .then((detailsList) => Promise.all(detailsList))
    .then((pokemonDetails) => pokemonDetails)
} 

