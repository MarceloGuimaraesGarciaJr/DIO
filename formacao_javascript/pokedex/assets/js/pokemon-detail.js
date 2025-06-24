
function getPokemonFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('pokemonName') || 'bulbasaur';
}
let pokemonName = getPokemonFromUrl();

const headCard = document.getElementById('card-header');
function changeCardColor (pokemonJson){
    const typeColors = {
        normal: "#B6B6A8",
        grass: "#8AD34F",
        fire: "#FB5643",
        water: "#55AEFE",
        fighting: "#A85641",
        flying: "#7BA4FF",
        poison: "#A95EA2",
        ground: "#ECCD59",
        rock: "#CFBD73",
        bug: "#C3D21F",
        ghost: "#7A76D7",
        electric: "#FCE63B",
        psychic: "#FA65B4",
        ice: "#95F1FE",
        dragon: "#8974FD",
        dark: "#8D6855",
        steel: "#C4C2D8",
        fairy: "#FAADFF"
    };
        const mainType = pokemonJson.types[0].type.name;
        headCard.style.background = typeColors[mainType] || '#AAA';
        
    }

async function fetchPokemon (pokemonName = 'bulbasaur'){ 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
        return response.json();
        }

async function generateDetailsHeadCard (pokemonName){ 
        let pokemonJson =  await fetchPokemon(pokemonName)
        console.log(pokemonJson)
        let types = pokemonJson.types.map(typeSlot => `<span class="tag ${typeSlot.type.name}">${typeSlot.type.name}</span>`).join('')
        const htmlHearderPokemon = ` 
       <h1>${pokemonJson.name.charAt(0).toUpperCase() + pokemonJson.name.slice(1)}</h1>
        <div class="tags">
            ${types}
        </div>
        <img src="${pokemonJson.sprites.other.dream_world.front_default}" alt="Bulbasaur" class="pokemon-img">
      `
    changeCardColor(pokemonJson); 
    document.head.title = (`${pokemonJson.name} - Details`)
    headCard.innerHTML = htmlHearderPokemon 
    
        
}

generateDetailsHeadCard(pokemonName);
