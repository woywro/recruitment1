import { Section } from '../../../../components/Section';
import { SectionField } from '../../../../components/SectionField';
import { PokemonInterface } from '../../../../types/PokemonInterface';

interface Props {
  pokemon: PokemonInterface;
}

export const BasicInfo = ({ pokemon }: Props) => {
  return (
    <Section title={'Basic Info'}>
      <SectionField field={'name'} value={pokemon.species} />
      <SectionField field={'color'} value={pokemon.color} />
      <SectionField field={'male'} value={pokemon.gender.male} />
      <SectionField field={'female'} value={pokemon.gender.female} />
      <SectionField field={'height'} value={pokemon.height} />
      <SectionField field={'weight'} value={pokemon.weight} />
    </Section>
  );
};
