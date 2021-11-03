/*
 * Character data
 */
export interface CharacterData {
    id: number;
    name: String;
    age?: number;
    sex?: String; // LISTE
    hair_color?: String; // LISTE
    occupation?: String;
    grade?: String;
    religion?: String;
    voiced_by?: String;
    created_at: String;
    updated_at: String;
    url: String;
    relatives: RelativeData[];
    episodes: String[];
}

/*
 * Relative data for a character
 */
export interface RelativeData {
    url: String;
    relation: String;
}

/*
 * Episode data
 */
export interface EpisodeData {
    id: number;
    name: String;
    season: number;
    episode: number;
    air_date: String;
    created_at: String;
    updated_at: String;
    characters: String[];
    locations: String[];
}

/*
 * Location data
 */
export interface EpisodeData {
    id: number;
    name: String;
    created_at: String;
    updated_at: String;
    episodes: String[];
}
