import { PageWrapper, Wrapper } from '../style';
import { Text } from '../../components/Text';
import Image from 'next/image';
import { Button } from '../../components/Button';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { SpritesView } from '../SpritesView';
import { BasicInfo } from './components/BasicInfo';
import { BaseStats } from './components/BaseStats';
import { Abilities } from './components/Abilities';
import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';

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
        <Text
          style={{
            fontFamily: "'Pokemon Solid', sans-serif",
            fontSize: '40px',
          }}
        >
          {pokemon.species}
        </Text>
        <Grid>
          <BasicInfo pokemon={pokemon} />
          <Abilities pokemon={pokemon} />
          <BaseStats pokemon={pokemon} />
        </Grid>
        <Button onClick={() => setIsOpen(true)}>all available sprites</Button>
        <Modal
          title={'sprities'}
          handleClose={() => setIsOpen(false)}
          isOpen={isOpen}
        >
          <SpritesView pokemonSpecies={pokemon.species} />
        </Modal>
      </Wrapper>
    </PageWrapper>
  );
};

const Grid = styled.div`
  display: grid;
  width: 100%;
  padding: 20px;
  height: 100%;
  grid-template-areas:
    'a b'
    'c c';
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-items: center;
  align-items: center;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
    flex-flow: column;
  }
  @media only screen and ${breakpoints.device.lg} {
    grid-template-areas:
      'a a'
      'b b'
      'c c';
  }
`;
