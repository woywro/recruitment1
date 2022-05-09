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
import { Grid, SpritesButton } from './style';
import { Modal } from '../../components/Modal';

interface Props {
  pokemon: PokemonInterface;
}

export const PokemonView = ({ pokemon }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  // const Modal = dynamic(() => import('../../components/Modal'));

  return (
    <Wrapper>
      <Grid>
        <Showcase pokemon={pokemon} />
        <BasicInfo pokemon={pokemon} />
        <Abilities pokemon={pokemon} />
        <BaseStats pokemon={pokemon} />
        <SpritesButton onClick={() => setIsOpen(true)}>
          all available sprites <FcImageFile />
        </SpritesButton>
      </Grid>
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
