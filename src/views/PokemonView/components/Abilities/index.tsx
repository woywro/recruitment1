import { Text } from '../../../../components/Text';
import styled from 'styled-components';
import { PokemonInterface } from '../../../../types/PokemonInterface';
import { Section } from '../../../../components/Section';
import { SectionField } from '../../../../components/SectionField';

interface Props {
  pokemon: PokemonInterface;
}

export const Abilities = ({ pokemon }: Props) => {
  return (
    <Section title={'Abilities'}>
      <SectionField field={'first'} value={pokemon.abilities.first} />
      <SectionField field={'second'} value={pokemon.abilities.second} />
      <SectionField field={'hidden'} value={pokemon.abilities.hidden} />
    </Section>
  );
};
