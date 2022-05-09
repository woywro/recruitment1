import { Text } from '../../../../components/Text';
import styled from 'styled-components';
import { PokemonInterface } from '../../../../types/PokemonInterface';
import { Section } from '../../../../components/Section';
import { SectionField } from '../../../../components/SectionField';

interface Props {
  pokemon: PokemonInterface;
}

export const BaseStats = ({ pokemon }: Props) => {
  return (
    <Section title={'Base stats'}>
      <SectionField field={'hp'} value={pokemon.baseStats.hp} />
      <SectionField field={'attack'} value={pokemon.baseStats.attack} />
      <SectionField field={'defense'} value={pokemon.baseStats.defense} />
      <SectionField
        field={'specialattack'}
        value={pokemon.baseStats.specialattack}
      />
      <SectionField
        field={'specialdefense'}
        value={pokemon.baseStats.specialdefense}
      />
      <SectionField field={'speed'} value={pokemon.baseStats.speed} />
    </Section>
  );
};
