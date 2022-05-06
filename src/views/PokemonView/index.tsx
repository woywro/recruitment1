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

export const PokemonView = ({ pokemon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PageWrapper>
      <Wrapper>
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
  align-content: center;
`;
