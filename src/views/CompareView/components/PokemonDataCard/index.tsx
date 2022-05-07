import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const PokemonDataCard = ({ item, comparedPokemons }) => {
  return (
    <Wrapper>
      <ComparisionList>
        <CompareText>{item.species}</CompareText>
        {/* <CompareText isHighest={()=>statsHighLighter(item)}>{item.types}</CompareText> */}
        <CompareText>{item.abilities.first}</CompareText>
        <CompareText>{item.abilities.second}</CompareText>
        <CompareText>{item.abilities.hidden}</CompareText>
        <CompareText
          isHighlighted={item.highestValues.includes('hp') ? true : false}
        >
          {item.baseStats.hp}
        </CompareText>
        <CompareText
          isHighlighted={item.highestValues.includes('attack') ? true : false}
        >
          {item.baseStats.attack}
        </CompareText>
        <CompareText
          isHighlighted={item.highestValues.includes('defense') ? true : false}
        >
          {item.baseStats.defense}
        </CompareText>
        <CompareText
          isHighlighted={
            item.highestValues.includes('specialattack') ? true : false
          }
        >
          {item.baseStats.specialattack}
        </CompareText>
        <CompareText
          isHighlighted={
            item.highestValues.includes('specialdefense') ? true : false
          }
        >
          {item.baseStats.specialdefense}
        </CompareText>
        <CompareText
          isHighlighted={item.highestValues.includes('speed') ? true : false}
        >
          {item.baseStats.speed}
        </CompareText>
        <CompareText>{item.gender.male}</CompareText>
        <CompareText>{item.gender.female}</CompareText>
        <CompareText>{item.gender.height}</CompareText>
        <CompareText>{item.gender.sprite}</CompareText>
        <CompareText>{item.gender.shinySprite}</CompareText>
        <CompareText>{item.gender.backSprite}</CompareText>
        <CompareText>{item.gender.shinyBackSprite}</CompareText>
      </ComparisionList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  position: relative;
  height: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  padding: 5px;
  background: white;
  margin: 10px;
  border-radius: 20px;
  flex: 0 0 auto;
`;

const ComparisionList = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  jusitify-content: flex-start;
  align-items: start;
  padding: 10px;
`;

const CompareText = styled.p<{ isHighlighted: boolean }>`
  font-size: 18px;
  background: ${(props) => (props.isHighlighted ? 'red' : 'none')};
`;
