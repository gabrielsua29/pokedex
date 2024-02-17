import { Pokemon } from "../types/types";
import { formatPokemonName } from "../utils/utils";

// https://unpkg.com/pokemons@1.1.0/pokemons.json
export async function fetchPokemons(): Promise<Pokemon[]> {
    const response = await fetch(
        "https://unpkg.com/pokemons@1.1.0/pokemons.json"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch pokemons");
    }
    
    const results = await response.json();
    console.log(results);

    const pokemons = results.results.map((pokemon: any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name.toLowerCase())}.gif`,
        type: pokemon.type,
    }));

    const uniquePokemons = pokemons.filter(
        (pokemon: any, index: any) =>
            pokemons.findIndex((other: any) => other.id === pokemon.id) === index
    );

    return uniquePokemons;
}
