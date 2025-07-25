let loadMoreButton = document.getElementById('loadMore')
let pokemonLists = document.getElementById('pokemonList')
let offset = 0 
const limit = 10
let maxRecords = 20
let limitPage = 20

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemonList(offset,limit).then((pokemons = [])=> {
        const newList = pokemons.map( (pokemon) =>
        `   <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.order}</span>
                    <a href="pokemon-detail.html?pokemonName=${pokemon.name}"><span class="name">${pokemon.name}</span></a>
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
        maxRecords += limitPage;
    }
    loadPokemonItens(offset, limit);
})

