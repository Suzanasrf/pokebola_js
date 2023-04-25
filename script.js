const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')
const form = document.querySelector('.form')
const input = document.querySelector('.input__search')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let searchPokemon= 1;
btnPrev.addEventListener('click', () =>{
    if(searchPokemon > 1){ 
    searchPokemon -= 1;
    renderPokemon(searchPokemon)
}
})

btnNext.addEventListener('click', () =>{
    searchPokemon += 1;
    renderPokemon(searchPokemon)
})









const fetchPokemon =async (pokemon) =>{

const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

if(APIResponse.status === 200) { 
const data = await APIResponse.json();
return data;

}
}


const renderPokemon = async (pokemon) => {

    const dados = await fetchPokemon(pokemon);
    if(dados) { 
        pokemonImage.style.display ='block'
     pokemonName.innerHTML = dados.name;
    pokemonNumber.innerHTML = dados.id;
    pokemonImage.src = dados['sprites']['versions']['generation-v']['black-white']
    ['animated']['front_default']
    input.value = ''
    searchPokemon = dados.id;
}else{
    pokemonName.innerHTML = 'Not_found';
    pokemonImage.style.display ='none'
    pokemonNumber=''
}}


form.addEventListener('submit', (event) =>{
    event.preventDefault()

    renderPokemon(input.value.toLowerCase())
   
})

renderPokemon('1')

