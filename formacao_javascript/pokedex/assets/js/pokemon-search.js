const searchText = document.getElementById('pokemonNameSearch'); 
const submitButton = document.getElementById('searchButton')
const findStatus = document.getElementById('pokeNotFind')


function pokemonSearch () {
    let pokemon = searchText.value
        if(pokemon != ""){
        pokemonLists.innerHTML = '';
        loadMoreButton.style.display = 'none';
        }
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                    findStatus.style.display = 'block';
                    loadPokemonItens(offset,limit); 
                    loadMoreButton.style.display = 'block';
                    }
                    else {
                        findStatus.style.display = 'block';
                    }
                    throw new Error('Pokémon não encontrado');
                }
                findStatus.style.display = 'none';
                return (response.json());

            }).then(response => pokemonApiToModel(response))
            .then(pokemon => {
                console.log(pokemon)
                const pokemonFinded = 
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
            pokemonLists.innerHTML = pokemonFinded
            }

       )
    }

submitButton.addEventListener('click', pokemonSearch);