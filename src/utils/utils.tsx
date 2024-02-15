export function formatPokemonName(name: string):string {
    if (name.includes("\u2640")) {
        return name.replace("\u2640", "-f")
    } else if (name.includes("\u2642")) {
        return name.replace("\u2642", "-m")
    } else if (name.includes(". ")) {
        return name.replace(". ", "-")
    } else if (name.includes("farfetch'd")) {
        return name.replace("farfetch'd", "farfetchd")
    } else {
        return name
    }   
}

export function waitFor(time: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, time));
}

export function formatItemName(name: string):string {
    const formatedName = name.charAt(0).toUpperCase() + name.slice(1)
    return formatedName;
}