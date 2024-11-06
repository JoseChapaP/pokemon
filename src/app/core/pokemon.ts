export interface PokemonList {
    count: number,
    next: string,
    previous: string,
    result: Pokemon[]
}

export interface Pokemon {
    name: string,
    url: string
}