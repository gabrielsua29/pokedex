import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./showlist.module.css";
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";
import { 
    grassIcon, poisonIcon, bugIcon, darkIcon, dragonIcon, electricIcon, fairyIcon, fightingIcon, fireIcon,
    flyingIcon, ghostIcon, groundIcon, iceIcon, normalIcon, psychicIcon, rockIcon, steelIcon, waterIcon 
} from "./pokemonTypesIconsExport";

const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
       const fetchAllPokemons = async () => {
        setIsLoading(true)
        await waitFor(1000)
        const allPokemons = await fetchPokemons()
        setPokemons(allPokemons)
        setIsLoading(false)
       }
       fetchAllPokemons() 
    },[])

    if (isLoading || !pokemons) {
        return <LoadingScreen />
    } 

    const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    });
    

    return (
        <>
            <Header placeholder="Search a pokemon" query={query} setQuery={setQuery}/>
            <main>
                <nav>
                    {filteredPokemons?.slice(0, 151).map((pokemon) => (
                        <Link 
                            key={pokemon.id}
                            className={styles.listItem} 
                            to={`/pokemons/${pokemon.name.toLowerCase()}`}
                        >
                            <img 
                                className={styles.listItemIcon}
                                src={pokemon.imgSrc}
                                alt={pokemon.name}    
                            />
                            <div className={styles.listItemText}>
                                <span>{pokemon.name}</span>
                                <span>{pokemon.id}</span>
                                <div className={styles.iconContainer}>
                                {pokemon.type.toString().toLowerCase().includes("grass") &&
                                    <img className={styles.pokemonTypeIcon} src={grassIcon} alt="Grass" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("poison") &&
                                    <img className={styles.pokemonTypeIcon} src={poisonIcon} alt="Poison" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("bug") &&
                                    <img className={styles.pokemonTypeIcon} src={bugIcon} alt="Bug" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("dark") &&
                                    <img className={styles.pokemonTypeIcon} src={darkIcon} alt="Dark" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("dragon") &&
                                    <img className={styles.pokemonTypeIcon} src={dragonIcon} alt="Dragon" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("electric") &&
                                    <img className={styles.pokemonTypeIcon} src={electricIcon} alt="Electric" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("fairy") &&
                                    <img className={styles.pokemonTypeIcon} src={fairyIcon} alt="Fairy" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("fighting") &&
                                    <img className={styles.pokemonTypeIcon} src={fightingIcon} alt="Fighting" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("fire") &&
                                    <img className={styles.pokemonTypeIcon} src={fireIcon} alt="Fire" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("flying") &&
                                    <img className={styles.pokemonTypeIcon} src={flyingIcon} alt="Flying" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("ghost") &&
                                    <img className={styles.pokemonTypeIcon} src={ghostIcon} alt="Ghost" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("ground") &&
                                    <img className={styles.pokemonTypeIcon} src={groundIcon} alt="Ground" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("ice") &&
                                    <img className={styles.pokemonTypeIcon} src={iceIcon} alt="Ice" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("normal") &&
                                    <img className={styles.pokemonTypeIcon} src={normalIcon} alt="Normal" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("psychic") &&
                                    <img className={styles.pokemonTypeIcon} src={psychicIcon} alt="Physic" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("rock") &&
                                    <img className={styles.pokemonTypeIcon} src={rockIcon} alt="Rock" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("steel") &&
                                    <img className={styles.pokemonTypeIcon} src={steelIcon} alt="Steel" />
                                }
                                {pokemon.type.toString().toLowerCase().includes("water") &&
                                    <img className={styles.pokemonTypeIcon} src={waterIcon} alt="Water" />
                                }
                                </div>

                            </div>
                        </Link>
                    ))}
                </nav>
            </main>
            <br/><br/><br/><br/>
            <Footer />
        </>
    );
    
}

export default Pokemons;