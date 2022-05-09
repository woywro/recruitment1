import { SectionField } from '../SectionField';
import { Section } from '../Section';
import { PokemonInterface } from '../../types/PokemonInterface';
import { useMemo } from 'react';
import { convertToArray } from '../../utils/convertToArray';
interface Props {
  baseStats: PokemonInterface['baseStats'];
  highlightHighest?: boolean;
}

export const PokemonBaseStats = ({ baseStats, highlightHighest }: Props) => {
  const BaseStats = convertToArray(baseStats);
  return (
    <Section title={'Base stats'}>
      {BaseStats.map((e) => {
        return (
          <SectionField
            key={e.key}
            field={e.key}
            value={e.value}
            isHighlighted={highlightHighest}
          />
        );
      })}
    </Section>
  );
};
