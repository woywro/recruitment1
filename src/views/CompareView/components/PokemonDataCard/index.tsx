import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { ScrollSyncPane } from 'react-scroll-sync';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Text';
import {
  ComparedPokemonInterface,
  PokemonInterface,
} from '../../../../types/PokemonInterface';
import { SectionField } from '../../../../components/SectionField';
import { Section } from '../../../../components/Section';
import { ComparisionList, Wrapper } from './style';
import { PokemonAbilities } from '../../../../components/PokemonAbilities';
import { PokemonBaseStats } from '../../../../components/PokemonBaseStats';

interface Props {
  comparedPokemon: ComparedPokemonInterface;
  comparedPokemons: ComparedPokemonInterface[];
  setComparedPokemons: (arg0: ComparedPokemonInterface[]) => void;
}

export const PokemonDataCard = ({
  comparedPokemon,
  comparedPokemons,
  setComparedPokemons,
}: Props) => {
  const handleDeleteFromComparision = useCallback(
    (species: string) => {
      const itemsFiltered = comparedPokemons.filter(
        (pokemon: PokemonInterface) => pokemon.species !== species
      );
      setComparedPokemons(itemsFiltered);
    },
    [comparedPokemon]
  );

  return (
    <ScrollSyncPane>
      <Wrapper>
        <Button
          onClick={() => handleDeleteFromComparision(comparedPokemon.species)}
        >
          remove
        </Button>
        <ComparisionList>
          <Section>
            <Image
              src={comparedPokemon.sprite}
              alt={comparedPokemon.species}
              width="150px"
              height="150px"
              placeholder="blur"
              blurDataURL="/assets/placeholder.png"
              loading="lazy"
            ></Image>
            <Text
              style={{
                fontFamily: "'Pokemon Solid', sans-serif",
                fontSize: '40px',
              }}
            >
              {comparedPokemon.species}
            </Text>
            <SectionField field={'species'} value={comparedPokemon.species} />
            <SectionField field={'types'} value={comparedPokemon.types} />
          </Section>
          <PokemonAbilities abilities={comparedPokemon.abilities} />
          <PokemonBaseStats
            baseStats={comparedPokemon.baseStats}
            highlightHighest={true}
          />
          <Section title={'gender'}>
            <SectionField field={'male'} value={comparedPokemon.gender.male} />
            <SectionField
              field={'female'}
              value={comparedPokemon.gender.female}
            />
          </Section>
        </ComparisionList>
      </Wrapper>
    </ScrollSyncPane>
  );
};
