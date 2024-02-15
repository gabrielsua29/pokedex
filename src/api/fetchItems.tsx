import { Item } from "../types/types";
import { formatItemName } from "../utils/utils";

export async function fetchItems(): Promise<Item[]> {
    const response = await fetch("https://pokeapi.co/api/v2/item")

    if (!response.ok) {
        throw new Error("Failed to fetch items")
    }

    const results = await response.json()
    console.log(results)

    const items = results.results.map((item: any) => ({
        name: formatItemName(item.name),
        imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name.toLowerCase()}.png`,
    }))

    return items;
}