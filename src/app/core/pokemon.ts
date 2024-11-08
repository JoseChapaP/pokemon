export interface PokemonList {
    count: number,
    next: string,
    previous: string,
    results: Pokemon[]
}

export interface Pokemon {
    name: string,
    url: string,
    image: string
}

export interface PokemonFull {
    abilities: Ability[],
    base_experience: number,
    cries: Cries,    
    forms: Forms[],
    game_indices: GameIndices[],
    height: number,
    held_items: any[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: Moves[],
    name: string,
    order: number,
    past_abilities: any,
    past_types: any,
    species: Species,
    sprites: Sprites,
    stats: Stats[],
    types: Types[],
    weight: number
}

export interface Ability {
    ability: {
        name: string,
        url:  string
    },
    is_hidden: boolean,
    slot:1
}

export interface Cries {
    latest: string,
    legacy: string
}

export interface Forms {
    name: string,
    url: string
}

export interface GameIndices {
    game_index: number,
    version: Version
}

export interface Version {
    name: string,
    url: string
}

export interface Moves {
    move: Move,
    version_group_details: VersionGroupDetails[]
}

export interface Move {
    name: string,
    url: string
}

export interface VersionGroupDetails {
    level_learned_at: number,
    move_learn_method: MoveLearnMethod
}

export interface MoveLearnMethod {
    name: string,
    url: string
}

export interface Species {
    name: string,
    url: string
}

export interface Sprites {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string,
    other: Other,
    versions: Versions
}

export interface Other {
    dream_world: {
        front_default: string,
        front_female: string
    },
    home: {
        front_default: string,
        front_female: string,
        front_shiny: string,
        front_shiny_female: string,
    },
    "official-artwork": {
        front_default: string,
        front_shiny: string
    },
    showdown: {
        back_default: string,
        back_female: string,
        back_shiny: string,
        back_shiny_female: string,
        front_default: string,
        front_female: string,
        front_shiny: string,
        front_shiny_female: string,
    }
}

export interface Versions {
    "generation-i": {
        "red-blue": {
            "back_default": string,
            "back_gray": string,
            "back_transparent": string,
            "front_default": string,
            "front_gray": string,
            "front_transparent": string,
        }
        "yellow":{
            "back_default": string,
            "back_gray": string,
            "back_transparent": string,
            "front_default": string,
            "front_gray": string,
            "front_transparent": string,
        }
    },
    "generation-ii": {
        "crystal": {
            "back_default": string,
            "back_shiny": string,
            "back_shiny_transparent": string,
            "back_transparent": string,
            "front_default": string,
            "front_shiny": string,
            "front_shiny_transparent": string,
            "front_transparent": string,
        },
        "gold":{
            "back_default": string,
            "back_shiny": string,
            "front_default": string,
            "front_shiny": string,
            "front_transparent": string,
        },
        "silver":{
            "back_default": string,
            "back_shiny": string,
            "front_default": string,
            "front_shiny": string,
            "front_transparent": string,
        }
    },
    "generation-iii": {
        "emerald": {
            "front_default": string,
            "front_shiny": string,
        },
        "firered-leafgreen": {
            "back_default": string,
            "back_shiny": string,
            "front_default": string,
            "front_shiny": string,
        },
        "ruby-sapphire": {
            "back_default": string,
            "back_shiny": string,
            "front_default": string,
            "front_shiny": string,
        }
    },
    "generation-iv": {
        "diamond-pearl": {
            "back_default": string,
            "back_female": string,
            "back_shiny": string,
            "back_shiny_female": string,
            "front_default": string,
            "front_female": string,
            "front_shiny": string,
            "front_shiny_female": string,
        },
        "heartgold-soulsilver": {
            "back_default": string,
            "back_female": string,
            "back_shiny": string,
            "back_shiny_female": string,
            "front_default": string,
            "front_female": string,
            "front_shiny": string,
            "front_shiny_female": string,
        },
        "platinum": {
            "back_default": string,
            "back_female": string,
            "back_shiny": string,
            "back_shiny_female": string,
            "front_default": string,
            "front_female": string,
            "front_shiny": string,
            "front_shiny_female": string,
        }
    },
    "generation-v": {
        "black-white": {
            "animated":{
                "back_default": string,
                "back_female": string,
                "back_shiny": string,
                "back_shiny_female": string,
                "front_default": string,
                "front_female": string,
                "front_shiny": string,
                "front_shiny_female":null
            },
            "back_default": string,
            "back_female": string,
            "back_shiny": string,
            "back_shiny_female": string,
            "front_default": string,
            "front_female": string,
            "front_shiny": string,
            "front_shiny_female": string,
        }
    },
    "generation-vi": {
        "omegaruby-alphasapphire":{
            "front_default": string,
            "front_female": string,
            "front_shiny": string,
            "front_shiny_female": string,
        },
        "x-y": {
            "front_default": string,
            "front_female": string,
            "front_shiny": string,
            "front_shiny_female": string,
        }
    },
    "generation-vii": {
        "icons": {
            "front_default": string,
            "front_female": string,
        },
        "ultra-sun-ultra-moon": {
            "front_default": string,
            "front_female": string,
            "front_shiny": string,
            "front_shiny_female": string,
        }
    },
    "generation-viii": {
        "icons": {
            "front_default": string,
            "front_female": string,
        }
    }
}

export interface Stats {
    base_stat: number,
    effort: number,
    stat: Stat
}

export interface Stat {
    name: string,
    url: string
}

export interface Types {
    slot: number,
    type: Type
}

export interface Type {
    name: string,
    url: string
}