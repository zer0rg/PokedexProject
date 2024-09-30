export interface PokeData{
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities: Ability[];
    forms: NamedAPIResource[];
    game_indices: GameIndex[];
    types: PokemonType[];
    stats: Stat[];
    species: NamedAPIResource;
    sprites: Sprites;
    results: Results[];
    moves: Move[];
}


export interface Move{
    move: NamedAPIResource;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail{
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
}
export interface Results{
    name: string;
    url: string;
}

export interface Ability {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
  }
  
  interface NamedAPIResource {
    name: string;
    url: string;
  }
  
  interface GameIndex {
    game_index: number;
    version: NamedAPIResource;
  }
  
  interface PokemonType {
    slot: number;
    type: NamedAPIResource;
  }
  
  interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
  }
  
  interface Sprites {
    front_default: string;
    front_shiny: string;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string;
    back_shiny: string;
    back_female: string | null;
    back_shiny_female: string | null;
    // Puedes añadir más propiedades si es necesario
  }