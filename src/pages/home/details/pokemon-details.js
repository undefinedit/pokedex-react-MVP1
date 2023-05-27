import { useLocation, useParams } from 'react-router-dom';
import './pokemon-details.css';

function Details() {
    const location = useLocation();
    const pokemon = location.state.pokemon;


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

    const getPokemonTypeClass = (type) => {
        if (type == null) return "pokemon-type"

        return type.toLowerCase();
    }

    const typeClass = getPokemonTypeClass(pokemon.types[0].type.name)

    return (
        <div className="main-detail">
            <div className="sub-details">

                <div className="header-logo-details">
                    <img className="pokeballs-logo-details" src="/assets/pokeballs-logo.png" />
                </div>

                <div className="header-title">
                    <h2 className="pokemon-name-detail">
                        {pokemon.name}
                    </h2>
                </div>

                <div className="main-head">
                    <div className="header-title">
                        <h2 className="pokemon-subtitle-detail">
                            Cod:
                        </h2>
                        <p className="pokemon-cod-detail">
                            #0{pokemon.id}
                        </p>
                    </div>

                    <div className="header-title-type">
                        <h2 className="pokemon-subtitle-type">
                            Tipo:
                        </h2>
                        <div className={`pokemon-type ${typeClass}`}>
                            <p>{pokemon.types[0].type.name}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="pokemon-title-description">
                        Descrição
                    </h2>
                </div>

                <div className="pokemon-description">
                    <p> text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popu</p>
                </div>

                <div>
                    <h2 className="pokemon-title-info">
                        Informações
                    </h2>
                </div>

                <div className="pokemon-sub-infos">
                    <div className="pokemon-titles">
                        <p>Altura:</p>
                        <p>Peso:</p>
                    </div>
                    <div className="pokemon-values">
                        <b>{heightMask(pokemon.height)}m</b>
                        <p>{pokemon.weight}kg</p>
                    </div>
                </div>

                <div>
                    <div className="pokemon-attribute">
                        <p className="pokemon-title-attribute">Vida:</p>
                        <div style={{ width: `${pokemon.stats[0].base_stat}%` }} className={pokemon.stats[0].stat.name.toLowerCase()}>
                        </div>
                    </div>

                    <div className="pokemon-attribute">
                        <p className="pokemon-title-attribute">Defesa:</p>
                        <div style={{ width: `${pokemon.stats[2].base_stat}%` }} className={pokemon.stats[2].stat.name.toLowerCase()}>
                        </div>
                    </div>

                    <div className="pokemon-attribute">
                        <p className="pokemon-title-attribute">Ataque:</p>
                        <div style={{ width: `${pokemon.stats[1].base_stat}%` }} className={pokemon.stats[1].stat.name.toLowerCase()}>
                        </div>
                    </div>

                    <div className="pokemon-attribute">
                        <p className="pokemon-title-attribute">Velocidade:</p>
                        <div style={{ width: `${pokemon.stats[3].base_stat}%` }} className={pokemon.stats[3].stat.name.toLowerCase()}>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pokemon-image">
                <img className="image-fit-detail" src={pokemon.sprites.other.dream_world.front_default} />
            </div>
        </div>
    );
}

export default Details;
