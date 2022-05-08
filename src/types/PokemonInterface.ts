export interface PokemonInterface {
  num: number;
  species: string;
  types: string;
  abilities: {
    first: string;
    second: string;
    hidden: string;
  };
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialattack: number;
    specialdefense: number;
    speed: number;
  };
  gender: {
    male: string;
    female: string;
  };
  height: number;
  weight: number;
  sprite: string;
  shinySprite: string;
  backSprite: string;
  shinyBackSprite: string;
}
