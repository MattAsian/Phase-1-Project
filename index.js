const pokemonInput = document.getElementById('pokemon-input');
const searchBtn = document.getElementById('search-btn');
const pokemonImg = document.getElementById('pokemon-img');
const pokemonName = document.getElementById('pokemon-name');

searchBtn.addEventListener('click', () => {
  const pokemonQuery = pokemonInput.value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`)
      .then(response => response.json())
      .then(data => {
          pokemonImg.src = data.sprites.front_default;
          pokemonName.textContent = data.name;
      })
      .catch(error => {
          alert('Could not find Pokémon. Please try again.');
      });
});