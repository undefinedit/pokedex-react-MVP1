import './pokemonList.css';

export const PokemonList = ({ pokemon }) => {

    const heightMask = (id) => {
        var idString = id.toString();
        var indice = 1;
        if (idString.length == 1) {
            var idComVirgula = `0,${idString}`;
            return idComVirgula
        }
        var idComVirgula = idString.slice(0, indice) + "," + idString.slice(indice);;
        return idComVirgula
    };

    return (
        <div>
            <div className="pokemon-grid">

                <div className="pokemon-card">

                    <div className="header-card">
                        <b className="pokemon-name"> {pokemon.name} </b>
                        <p className="pokemon-cod"> #0{pokemon.id} </p>
                    </div>

                    <div className="pokemon-image">
                        <img className="image-fit" src={pokemon.sprites.other.dream_world.front_default} />
                    </div>

                    <div className="pokemon-footer-card">
                        <div className="pokemon-titles">
                            <p>Altura:</p>
                            <p>Peso:</p>
                        </div>
                        <div className="pokemon-values">
                            <b> {heightMask(pokemon.height)}m</b>
                            <p> {pokemon.weight}kg </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
