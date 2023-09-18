const pokemonInput = document.getElementById('pokemon-input');
const searchBtn = document.getElementById('search-btn');
const pokemonName = document.getElementById('pokemon-name');
const pokemonType = document.getElementById('pokemon-type');
const pokemonImg = document.getElementById('pokemon-img')

searchBtn.addEventListener('click', () => {
  const pokemonQuery = pokemonInput.value.toLowerCase().trim(); 

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Not found");
      }
      return response.json();
      })
      .then(data => {
        pokemonImg.src = data.sprites.front_default;
        pokemonName.textContent = data.name;
        pokemonType.textContent = "Type: " + data.types.map(typeInfo => typeInfo.type.name).join(", ");
      })
      .catch(error => {
        alert('Could not find Pokémon. Please try again.');
      });
});

document.addEventListener("keydown", function(event) {
  if (event.keyCode === 32) {
    toggleDarkMode();
  }
});

function toggleDarkMode() {
  const body = document.body;
  console.log('yay');
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.remove('dark-container');
  } else {
    body.classList.add('dark-mode');
    body.classList.add('dark-container');
  }
}

document.getElementById('pokemon-img').addEventListener('mouseover', function() {
  this.src = "Tis I Diotto.png";
});