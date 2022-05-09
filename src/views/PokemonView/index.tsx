import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FcImageFile } from 'react-icons/fc';
import { PokemonInterface } from '../../types/PokemonInterface';
import { pokemonSpeciesFormatter } from '../../utils/pokemonSpeciesFormatter';
import { SpritesView } from '../SpritesView';
import { Wrapper } from '../style';
import { Abilities } from './components/Abilities';
import { BaseStats } from './components/BaseStats';
import { BasicInfo } from './components/BasicInfo';
import { Showcase } from './components/Showcase';
import { SectionWrapper, SpritesButton } from './style';
import { Modal } from '../../components/Modal';

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
        <Abilities pokemon={pokemon} />
        <BaseStats pokemon={pokemon} />
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
