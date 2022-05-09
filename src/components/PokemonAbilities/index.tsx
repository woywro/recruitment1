import { SectionField } from '../SectionField';
import { Section } from '../Section';
import { PokemonInterface } from '../../types/PokemonInterface';
import { convertToArray } from '../../utils/convertToArray';
import { useMemo } from 'react';

interface Props {
  abilities: PokemonInterface['abilities'];
}

export const PokemonAbilities = ({ abilities }: Props) => {
  const Abilities = convertToArray(abilities);
  return (
    <Section title={'Abilities'}>
      {Abilities.map((e) => {
        return <SectionField key={e.key} field={e.key} value={e.value} />;
      })}
    </Section>
  );
};
