import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Text';
import Image from 'next/image';
import {
  ComparedPokemonInterface,
  PokemonInterface,
} from '../../../../types/PokemonInterface';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import { ComparisionField } from '../ComparisionField';
import { Section } from '../Section';

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

  const Abilities: DataInterface[] = FormData(comparedPokemon.abilities);
  const Stats: DataInterface[] = FormData(comparedPokemon.baseStats);

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
            <ComparisionField
              field={'species'}
              value={comparedPokemon.species}
            />
            <ComparisionField field={'types'} value={comparedPokemon.types} />
          </Section>
          <Section title={'Abilities'}>
            {Abilities.map((ability) => {
              return (
                <ComparisionField field={ability.key} value={ability.value} />
              );
            })}
          </Section>
          <Section title={'Stats'}>
            {Stats.map((stat) => {
              return (
                <ComparisionField
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
            <ComparisionField
              field={'male'}
              value={comparedPokemon.gender.male}
            />
            <ComparisionField
              field={'female'}
              value={comparedPokemon.gender.female}
            />
          </Section>
        </ComparisionList>
      </Wrapper>
    </ScrollSyncPane>
  );
};

const Wrapper = styled.div`
  min-width: 200px;
  position: relative;
  height: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  padding: 10px;
  background: white;
  margin: 10px;
  border-radius: 20px;
  flex: 0 0 auto;
`;

const ComparisionList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  jusitify-content: center;
  align-items: center;
  padding: 10px;
`;
