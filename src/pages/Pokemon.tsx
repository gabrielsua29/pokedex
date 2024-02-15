import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";
import  BulbasaurImg from "../assets/bulbasaur.gif";
import Footer from "../components/Footer";
import styles from "./pokemon.module.css";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";


const Pokemon = () => {
    
    const {name} = useParams()
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState<PokemonDetails>() //Para que sea del tipo creado en /types/types.d.ts
    // navigate(-1) vuelve 1 pagina atras
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getPokemon() {
            setIsLoading(true)
            await waitFor(500)
            const fetchedPokemon = await fetchPokemon(name as string) // Se le debe especificar que name es string         
            setPokemon(fetchedPokemon)   
            setIsLoading(false)
        }
        getPokemon()
    }, [name])

    if (isLoading || !pokemon) {
        return <LoadingScreen />
    }

    return(
        <>
            <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
                <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" />
                Go Back
            </button>
            <div className={styles.pokemon}>
                <main className={styles.pokemonInfo}>
                    <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
                    <div>Num. {pokemon?.id}</div>
                    <div>
                        <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt={name} />
                    </div>
                    <div>HP: {pokemon?.hp}</div>
                    <div>Attack: {pokemon?.attack}</div>
                    <div>Defense: {pokemon?.defense}</div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Pokemon;