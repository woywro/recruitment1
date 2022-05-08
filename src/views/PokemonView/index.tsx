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

interface Props {
  pokemon: PokemonInterface;
}

export const PokemonView = ({ pokemon }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Grid>
        <div style={{ gridArea: 'i' }}>
          <div>
            <Image
              src={pokemon.sprite}
              alt={pokemon.species}
              width="150px"
              height="150px"
              placeholder="blur"
              blurDataURL="/assets/placeholder.png"
              loading="lazy"
            ></Image>
          </div>
          <Text
            style={{
              fontFamily: "'Pokemon Solid', sans-serif",
              fontSize: '40px',
            }}
          >
            {pokemon.species}
          </Text>
        </div>
        <BasicInfo pokemon={pokemon} />
        <Abilities pokemon={pokemon} />
        <BaseStats pokemon={pokemon} />
        <SpritesButton onClick={() => setIsOpen(true)}>
          all available sprites
        </SpritesButton>
      </Grid>
      <Modal
        title={'sprities'}
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <SpritesView pokemonSpecies={pokemon.species} />
      </Modal>
    </Wrapper>
  );
};

const SpritesButton = styled.button`
  background: white;
  border-radius: 20px;
  border:none;
  cursor:pointer;
  box-shadow: ${(props) => props.theme.shadow};
  width:100%;
  height:100%;
  font-size: 30px;
  background: ${(props) => props.theme.colors.primary}
  grid-area: 'd';
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
    'i i'
    'a b'
    'c d';
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
