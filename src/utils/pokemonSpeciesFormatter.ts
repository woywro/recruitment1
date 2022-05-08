export const pokemonSpeciesFormatter = (species: string) => {
  const speciesFormatted: string = species
    .toLowerCase()
    .replaceAll(' ', '')
    .replaceAll('-', '')
    .replaceAll('.', '')
    .replaceAll("'", '')
    .replaceAll('%', '')
    .replaceAll('type:null', 'pokestarf00');

  // console.log(speciesFormatted);
  return speciesFormatted;
};
