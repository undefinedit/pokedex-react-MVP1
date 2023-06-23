import axios from 'axios';

const BASE_URL = 'https://backend-pokeapi.azurewebsites.net/';



const fetchAllPokemon = async (limit, pageNumber) => {
    try {
        debugger
        const offset = (pageNumber - 1) * limit;
        const response = await axios.get(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
        const data = response.data;

        const pokemonUrls = data.results.map(pokemon => pokemon.url);
        const pokemonData = await Promise.all(pokemonUrls.map(url => axios.get(url).then(response => response.data)));

        return pokemonData;
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        throw error;
    }
};

const getPokemonById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${id}`)
        return response.data
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        throw error;
    }
}

export { fetchAllPokemon, getPokemonById };