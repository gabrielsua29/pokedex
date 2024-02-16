import { ItemDetails } from "../types/types";

export async function fetchItem(name: string): Promise<ItemDetails> {
    const response = await fetch(`https://pokeapi.co/api/v2/item/${name}`)
    if (!response.ok) {
        throw new Error("Error fetching Item Details")
    }
    const result = await response.json()
    const item = {
        name: result.name,
        id: result.id,
        imgSrc: result.sprites.default,
        cost: result.cost,
        fling_power: result.fling_power,
    }

    return item;
}