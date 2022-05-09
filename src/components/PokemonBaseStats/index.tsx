import { SectionField } from '../SectionField';
import { Section } from '../Section';
import { PokemonInterface } from '../../types/PokemonInterface';
import { convertToArray } from '../../utils/convertToArray';
import { useMemo } from 'react';

interface Props {
  baseStats: PokemonInterface['baseStats'];
  highestValues?: string[];
}

export const PokemonBaseStats = ({ baseStats, highestValues }: Props) => {
  const BaseStats = useMemo(() => convertToArray(baseStats), [baseStats]);
  return (
    <Section title={'Base stats'}>
      {BaseStats.map((e) => {
        return (
          <SectionField
            key={e.key}
            field={e.key}
            value={e.value}
            isHighlighted={highestValues?.includes(e.key) ? true : false}
          />
        );
      })}
    </Section>
  );
};
