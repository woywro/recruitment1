import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Text } from '../../components/Text';
import { hoverEffectBg } from '../../mixins/hoverEffects';
import breakpoints from '../../theme/breakpoints';
import { PokemonInterface } from '../../types/PokemonInterface';
import { SpritesView } from '../SpritesView';
import { PageWrapper, Wrapper } from '../style';
import { Abilities } from './components/Abilities';
import { BaseStats } from './components/BaseStats';
import { BasicInfo } from './components/BasicInfo';
import { Showcase } from './components/Showcase';
import { FcImageFile } from 'react-icons/fc';
import { pokemonSpeciesFormatter } from '../../utils/pokemonSpeciesFormatter';

interface Props {
  pokemon: PokemonInterface;
}

export const PokemonView = ({ pokemon }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

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
      <Modal
        title={'sprities'}
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <SpritesView
          pokemonSpecies={pokemonSpeciesFormatter(pokemon.species)}
        />
      </Modal>
    </Wrapper>
  );
};

const SpritesButton = styled.button`
  border:none;
  cursor:pointer;
  width:100%;
  height:100%;
  background:none;
  font-size: 30px;
  background: ${(props) => props.theme.colors.primary}
  grid-area: 'e';
  :hover{
    ${hoverEffectBg}
  }
`;

const Grid = styled.div`
  overflow-y: scroll;
  width: 100%;
  padding: 20px;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'a a'
    'b c'
    'd e';
  gap: 20px;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-areas:
      'i i'
      'a a'
      'b b'
      'c c'
      'd d';
  }
  @media only screen and ${breakpoints.device.lg} {
  }
`;
