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

interface DataInterface {
  key: string;
  value: string;
}

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

  const FormData = (property: {}) => {
    const returnData: DataInterface[] = Object.entries(property)
      .filter((e) => !e.includes('__typename'))
      .map(([key, value]) => {
        const formattedValue = (): string => {
          if (value == null) {
            return '-';
          } else {
            return value;
          }
        };
        return { key, value: formattedValue() };
      });
    return returnData;
  };

  const Abilities: DataInterface[] = useMemo(
    () => FormData(comparedPokemon.abilities),
    [comparedPokemon]
  );
  const Stats: DataInterface[] = useMemo(
    () => FormData(comparedPokemon.baseStats),
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
          <Section title={'Abilities'}>
            {Abilities.map((ability) => {
              return (
                <SectionField
                  field={ability.key}
                  value={ability.value}
                  key={ability.key}
                />
              );
            })}
          </Section>
          <Section title={'Stats'}>
            {Stats.map((stat) => {
              return (
                <SectionField
                  key={stat.key}
                  field={stat.key}
                  value={stat.value}
                  isHighlighted={
                    comparedPokemon.highestValues.includes(stat.key)
                      ? true
                      : false
                  }
                />
              );
            })}
          </Section>
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
