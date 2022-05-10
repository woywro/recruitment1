import { useState } from 'react';
import { FcImageFile } from 'react-icons/fc';
import { Modal } from '../../components/Modal';
import { PokemonAbilities } from '../../components/PokemonAbilities';
import { PokemonBaseStats } from '../../components/PokemonBaseStats';
import { PokemonInterface } from '../../types/PokemonInterface';
import { pokemonSpeciesFormatter } from '../../utils/pokemonSpeciesFormatter';
import { SpritesView } from '../SpritesView';
import { Wrapper } from '../style';
import { BasicInfo } from './components/BasicInfo';
import { Showcase } from './components/Showcase';
import { SectionWrapper, SpritesButton } from './style';

interface Props {
  pokemon: PokemonInterface;
}

export const PokemonView = ({ pokemon }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <Showcase pokemon={pokemon} />
      <SectionWrapper>
        <BasicInfo pokemon={pokemon} />
        <PokemonAbilities abilities={pokemon.abilities} />
        <PokemonBaseStats baseStats={pokemon.baseStats} />
      </SectionWrapper>
      <SpritesButton onClick={() => setIsOpen(true)}>
        all available sprites <FcImageFile />
      </SpritesButton>
      {isOpen && (
        <Modal title={'sprities'} handleClose={() => setIsOpen(false)}>
          <SpritesView
            pokemonSpecies={pokemonSpeciesFormatter(pokemon.species)}
          />
        </Modal>
      )}
    </Wrapper>
  );
};
