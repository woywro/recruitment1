import dynamic from 'next/dynamic';
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
import type { Modal as ModalType } from '../../components/Modal';
import { Props as ModalProps } from '../../components/Modal';

interface Props {
  pokemon: PokemonInterface;
}

export const PokemonView = ({ pokemon }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const DynamicModal = dynamic<ModalProps>(
    () => import('../../components/Modal').then((mod) => mod.Modal),
    {
      ssr: false,
    }
  );
  return (
    <Wrapper>
      <Showcase pokemon={pokemon} />
      <SectionWrapper>
        <BasicInfo pokemon={pokemon} />
        <PokemonAbilities abilities={pokemon.abilities} />
        <PokemonBaseStats baseStats={pokemon.baseStats} />
      </SectionWrapper>
      <SpritesButton onClick={() => setIsOpen(true)}>
        All available sprites <FcImageFile />
      </SpritesButton>
      {isOpen && (
        <DynamicModal title={'Sprites'} handleClose={() => setIsOpen(false)}>
          <SpritesView
            pokemonSpecies={pokemonSpeciesFormatter(pokemon.species)}
          />
        </DynamicModal>
      )}
    </Wrapper>
  );
};
