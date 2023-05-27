import './App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPokemon } from '../../service/pokeService';
import { PokemonList } from '../../components/pokemon-list/pokemonList';

function Home() {

    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonName, setPokemonName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);



    const fetchData = async (limit, offset) => {
        try {
            const data = await fetchAllPokemon(limit, offset);
            setPokemonData(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
            setIsLoading(false);
        }
    };

    const nextPage = () => {
        setPokemonData([]);
        setCurrentPage((prevPage) => prevPage + 1);
        fetchData(limit, currentPage +1);
    }

    const previousPage = () => {
        if (currentPage > 1) {
            setPokemonData([]);
            setCurrentPage((prevPage) => prevPage - 1);
            fetchData(limit, currentPage - 1);
        }
      }

    const searchPokemon = () => {
        const filteredPokemons = pokemonData.filter(
            (pokemon) =>
                pokemon.name.toLowerCase().startsWith(pokemonName.toLowerCase())
        );

        if (filteredPokemons.length > 0) {
            setPokemonData(filteredPokemons);
        }
    };

    const resetList = () => {
        if (pokemonName == "" && pokemonData.length < 10) {
            try {
                setPokemonData([]);
                const data = fetchData(limit, currentPage);
                setPokemonData(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
                setIsLoading(false);
            }

        }
    };

    useEffect(() => {
        fetchData(limit, currentPage);
    }, []);

    return (
        <div className="App">
            <div className="header-logo">
                <img className="pokeballs-logo" src={"/assets/pokeballs-logo.png"} />
            </div>

            <div className="pokemon-title-head">
                <div>
                    <h2 className="pokemon-title">
                        Explore o mundo dos <span className="pokemon-color">Pokémons </span>
                    </h2>
                    <p className="pokemon-subtitle">Descubra todas as espécies de Pokémons</p>
                    <div className="search-pokemon">
                        <input className="search-input"
                            type="text"
                            name="buscar"
                            id="buscar"
                            value={pokemonName}
                            onChange={(e) => setPokemonName(e.target.value)}
                            onBlur={resetList}
                        />
                        <button className="search-button" onClick={searchPokemon} >Buscar</button>
                    </div>
                </div>

                <div className="header-images">
                    <div>
                        <img className="first-responsive-image"
                            srcSet='/assets/large-pokemon-card-1.png 1500w,
                                    /assets/pokemon-card-1.png 500w'
                            src="/assets/pokemon-card-1.png"
                        />
                    </div>
                    <div className="pokemon-card-below">
                        <img className="second-responsive-image"
                            srcSet='/assets/large-pokemon-card-2.png 1500w,
                                    /assets/pokemon-card-2.png 500w'
                            src="/assets/pokemon-card-2.png"
                        />
                    </div>
                    <div>
                        <img className="third-responsive-image"
                            srcSet='/assets/large-pokemon-card-3.png 1500w,
                                     /assets/pokemon-card-3.png 500w'
                            src="/assets/pokemon-card-3.png"
                        />
                    </div>
                </div>
            </div>

            <div className="pokedex-title">
                <h3 className="pokedex-subtitle">Pokédex</h3>
                <div>
                    <button className="round-button-right" onClick={previousPage} ></button>
                    <button className="round-button-left" onClick={nextPage}></button>
                </div>
            </div>

            <div className="pokemon-grid">
                {isLoading ? (
                    <p>Loading...</p>
                ) : pokemonData.length > 0 ? (
                    pokemonData.map(pokemon => (
                        <Link to={`pokemon/${pokemon.id}`}
                            state={{ pokemon }}
                            style={{ textDecoration: 'none' }} key={pokemon.id}>
                            <PokemonList key={pokemon.id} pokemon={pokemon} /> </Link>
                    ))
                ) :
                    (
                        <p>No Pokémon data available.</p>
                    )
                }
            </div>
        </div >
    );
}

export default Home;
