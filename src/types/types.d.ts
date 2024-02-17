export type Pokemon = {
    name: string;
    id: string;
    imgSrc: string;
    type: string;   
}

export type PokemonDetails = {
    name: string;
    id: string;
    imgSrc: string;
    hp: number;
    attack: number;
    defense: number;
}

export type Item = {
    name: string;
    id: number;
    imgSrc: string;
}

export type ItemDetails = {
    name: string;
    id: number;
    imgSrc: string;
    cost: number;
    fling_power: number;
}