const tabs = document.querySelectorAll('.tab');
const cardBody = document.querySelector('.card-body');

async function generateAbout(pokemonName) {
    let pokemonJson = await fetchPokemon(pokemonName);
    const abilities = pokemonJson.abilities.map(a => a.ability.name).join(', ');
    const height = (pokemonJson.height / 10).toFixed(2) + ' m';
    const weight = (pokemonJson.weight / 10).toFixed(1) + ' kg';
    const species = pokemonJson.species.name.charAt(0).toUpperCase() + pokemonJson.species.name.slice(1);
    
    const htmlAboutPokemon = `
      <div class="tabs">
        <div class="tab active">About</div>
        <div class="tab">Base Stats</div>
        <div class="tab">Evolution</div>
        <div class="tab">Moves</div>
      </div>
      <div class="info"><span>Species:</span> ${species}</div>
      <div class="info"><span>Height:</span> ${height}</div>
      <div class="info"><span>Weight:</span> ${weight}</div>
      <div class="info"><span>Abilities:</span> ${abilities}</div>
    `;
    cardBody.innerHTML = htmlAboutPokemon;
}
async function generateBaseStats(pokemonName){ 
        let pokemonJson =  await fetchPokemon(pokemonName)
        let stats = pokemonJson.stats.map(stats => `<div class="info"><span>${stats.stat.name}:</span> ${stats.base_stat}</div>` ).join('')
        const htmlBasePokemon = `
      <div class="tabs">
        <div class="tab">About</div>
        <div class="tab active">Base Stats</div>
        <div class="tab">Evolution</div>
        <div class="tab">Moves</div>
      </div>
      ${stats}
    `
    cardBody.innerHTML = htmlBasePokemon;       
}

async function generateEvolutions(pokemonName) {
    let pokemonJson = await fetchPokemon(pokemonName);
    const speciesResponse = await fetch(pokemonJson.species.url);
    const speciesData = await speciesResponse.json();
    const evolutionChainUrl = speciesData.evolution_chain.url;
    const evolutionResponse = await fetch(evolutionChainUrl);
    const evolutions = await evolutionResponse.json();
    let evolutionsList = '';
    let evo = evolutions.chain;
    let stage = 1
    do {
        evolutionsList += `<div class="info"><span>Stage: ${stage}</span> ${evo.species.name}</div>`;
        evo = evo.evolves_to[0];
        stage++
    } while (evo && evo.species);

    const htmlEvolutionPokemon = `
      <div class="tabs">
        <div class="tab">About</div>
        <div class="tab">Base Stats</div>
        <div class="tab active">Evolution</div>
        <div class="tab">Moves</div>
      </div>
      ${evolutionsList}
    `;
    cardBody.innerHTML = htmlEvolutionPokemon;
}

async function generateMoves(pokemonName) {
    let pokemonJson = await fetchPokemon(pokemonName);
    let movesList = pokemonJson.moves.slice(0, 10).map((moveObj, idx) => 
        `<div class="info"><span>Move ${idx + 1}:</span> ${moveObj.move.name}</div>`
    ).join('');
    const htmlMoves = `
      <div class="tabs">
        <div class="tab">About</div>
        <div class="tab">Base Stats</div>
        <div class="tab">Evolution</div>
        <div class="tab active">Moves</div>
      </div>
      ${movesList}
    `;
    cardBody.innerHTML = htmlMoves;
}


  const tabContents = {
    'About': generateAbout,
    'Base Stats': generateBaseStats ,
    'Evolution': generateEvolutions,
    'Moves': generateMoves
  };


tabContents['About'](pokemonName);
 document.addEventListener('click', function (e) {
  if (e.target.classList.contains('tab')) {
    const selectedTab = e.target.textContent.trim();
    if (typeof tabContents[selectedTab] === 'function') {
      tabContents[selectedTab](pokemonName);
    } else {
      cardBody.innerHTML = tabContents[selectedTab];
    }
    setTimeout(() => {
      const newTabs = document.querySelectorAll('.tab');
      newTabs.forEach(tab => {
        if (tab.textContent.trim() === selectedTab) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }, 10);
  }
});