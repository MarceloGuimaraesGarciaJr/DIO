let loadMoreButton = document.getElementById('loadMore')
let pokemonLists = document.getElementById('pokemonList')
let offset = 0 
const limit = 12
let maxRecords = 24
let limitPage = 24

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemonList(offset,limit).then((pokemons = [])=> {
        const newList = pokemons.map( (pokemon) =>
        `   <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.order}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}"/>
                    </div>  
                </li>
        `
        ).join('')

        
        pokemonLists.innerHTML += newList
    
}) 
}

loadPokemonItens(offset,limit); 

loadMoreButton.addEventListener('click', () => {
    offset += limit

    if (offset >= maxRecords) {
        pokemonLists.innerHTML = '';
        offset = maxRecords;
        maxRecords += limitPage; // Agora cresce linearmente: 24, 36, 48, 60, ...
    }
    loadPokemonItens(offset, limit);
})

