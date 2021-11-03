/**
 * Base data.
 */
export interface BaseData {
  id: string;
}

/**
 * Error data.
 */
export interface ErrorData {
  error:
  'access_denied'
  | 'network_error';
  error_description: string;
}

/**
 * User data.
 */
export interface UserData extends BaseData {
  id: string;
  email: string;
  username: string;
  password: string;
}

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
