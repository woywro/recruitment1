import { ComparedPokemonInterface } from '../types/PokemonInterface';

interface baseStatsInterface {
  hp: number;
  attack: number;
  defense: number;
  specialattack: number;
  specialdefense: number;
  speed: number;
}

export const getHighestStats = (
  comparedPokemons: ComparedPokemonInterface[]
) => {
  const allStats: baseStatsInterface[] = comparedPokemons.map(
    (pokemon: ComparedPokemonInterface) => {
      return pokemon.baseStats;
    }
  );
  const result: baseStatsInterface = {
    hp: Math.max(...allStats.map((o) => o.hp)),
    attack: Math.max(...allStats.map((o) => o.attack)),
    defense: Math.max(...allStats.map((o) => o.defense)),
    specialattack: Math.max(...allStats.map((o) => o.specialattack)),
    specialdefense: Math.max(...allStats.map((o) => o.specialdefense)),
    speed: Math.max(...allStats.map((o) => o.speed)),
  };
  return result;
};
