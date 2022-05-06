import { PageWrapper, Wrapper } from '../style';
import { Text } from '../../components/Text';
import Image from 'next/image';
import { Button } from '../../components/Button';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { SpritesView } from '../SpritesView';

export const PokemonView = ({ pokemon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PageWrapper>
      <Wrapper>
        <Image
          src={pokemon.sprite}
          alt={pokemon.species}
          width="150px"
          height="150px"
        ></Image>
        <Text>{pokemon.species}</Text>
        <Text>{pokemon.color}</Text>
        <Text>{pokemon.gender.male}</Text>
        <Text>{pokemon.gender.female}</Text>
        <Text>{pokemon.height}</Text>
        <Text>{pokemon.weight}</Text>
        <Text>{pokemon.abilities.first}</Text>
        <Text>{pokemon.abilities.second}</Text>
        <Text>{pokemon.abilities.hidden}</Text>
        <Text>{pokemon.baseStats.hp}</Text>
        <Text>{pokemon.baseStats.attack}</Text>
        <Text>{pokemon.baseStats.defense}</Text>
        <Text>{pokemon.baseStats.specialattack}</Text>
        <Text>{pokemon.baseStats.specialdefense}</Text>
        <Text>{pokemon.baseStats.speed}</Text>
        <Button onClick={() => setIsOpen(true)}>open modal</Button>
      </Wrapper>
      <Modal
        title={'sprities'}
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <SpritesView pokemonSpecies={pokemon.species} />
      </Modal>
    </PageWrapper>
  );
};
