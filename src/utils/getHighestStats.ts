export const getHighestStats = (comparedPokemons) => {
  const allStats = comparedPokemons.map((pokemon) => {
    return pokemon.baseStats;
  });
  const result = {
    hp: Math.max(...allStats.map((o) => o.hp)),
    attack: Math.max(...allStats.map((o) => o.attack)),
    defense: Math.max(...allStats.map((o) => o.defense)),
    specialattack: Math.max(...allStats.map((o) => o.specialattack)),
    specialdefense: Math.max(...allStats.map((o) => o.specialdefense)),
    speed: Math.max(...allStats.map((o) => o.speed)),
  };
  return result;
};
