import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Text';
import { PokemonInterface } from '../../../../types/PokemonInterface';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

interface Props {
  item: PokemonInterface;
  comparedPokemons: any;
  setComparedPokemons: any;
}

export const PokemonDataCard = ({
  item,
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
    [item]
  );

  const FormData = (property: {}) => {
    const returnData = Object.entries(property)
      .filter((e) => !e.includes('__typename'))
      .map(([key, value]) => {
        const formattedValue = () => {
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

  const Abilities = FormData(item.abilities);
  const Stats = FormData(item.baseStats);
  const Gender = FormData(item.gender);

  return (
    <ScrollSyncPane>
      <Wrapper>
        <Button onClick={() => handleDeleteFromComparision(item.species)}>
          remove
        </Button>
        <ComparisionList>
          <Section>
            <Text
              style={{
                fontFamily: "'Pokemon Solid', sans-serif",
                fontSize: '40px',
              }}
            >
              {item.species}
            </Text>
            <CompareText>
              <Text bold={true}>{'species'}: </Text>
              <Text>{item.species}</Text>
            </CompareText>
            <CompareText>
              <Text bold={true}>{'types'}: </Text>
              <Text>{item.types}</Text>
            </CompareText>
          </Section>
          <Section>
            <Title size={'big'}>Abilities</Title>
            {Abilities.map((ability) => {
              return (
                <CompareText>
                  <Text bold={true}>{ability.key}: </Text>
                  <Text>{ability.value}</Text>
                </CompareText>
              );
            })}
          </Section>
          <Section>
            <Title size={'big'}>Stats</Title>
            {Stats.map((stat) => {
              return (
                <CompareText
                  isHighlighted={
                    item.highestValues.includes(stat.key) ? true : false
                  }
                >
                  <Text bold={true}>{stat.key}: </Text>
                  <Text>{stat.value}</Text>
                </CompareText>
              );
            })}
          </Section>
          <Section>
            <Title size={'big'}>Gender</Title>
            {Gender.map((gender) => {
              return (
                <CompareText>
                  <Text bold={true}>{gender.key}: </Text>
                  <Text>{gender.value}</Text>
                </CompareText>
              );
            })}
          </Section>
        </ComparisionList>
      </Wrapper>
    </ScrollSyncPane>
  );
};

const Title = styled(Text)`
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  margin: 5px;
`;

const Section = styled.div`
  background: white;
`;

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
  padding: 5px;
  background: white;
  margin: 10px;
  border-radius: 20px;
  flex: 0 0 auto;
`;

const ComparisionList = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
  jusitify-content: flex-start;
  align-items: start;
  padding: 10px;
`;

const CompareText = styled.div<{ isHighlighted?: boolean }>`
  padding: 2px;
  display: flex;
  flex-flow: row;
  background: ${(props) => (props.isHighlighted ? '#abff32' : 'none')};
  border-radius: 10px;
  margin: 2px;
`;
