import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const PokemonDataCard = ({
  comparisionCard: { item, id },
  comparisionCards,
}) => {
  //   const [highestValues, setHighestValues] = useState({});

  //   useEffect(() => {
  //     setHighestValues(getHighestValues(comparisionCards));
  //   }, []);

  return (
    <ComparisionList>
      <CompareText>{item.species}</CompareText>
      {/* <CompareText isHighest={()=>statsHighLighter(item)}>{item.types}</CompareText> */}
      <CompareText>{item.abilities.first}</CompareText>
      <CompareText>{item.abilities.second}</CompareText>
      <CompareText>{item.abilities.hidden}</CompareText>
      {/* <CompareText isHighlighted={checkIfHighest(item, 'hp', highestValues)}>
        {item.baseStats.hp}
      </CompareText>
      <CompareText
        isHighlighted={checkIfHighest(item, 'attack', highestValues)}
      >
        {item.baseStats.attack}
      </CompareText>
      <CompareText
        isHighlighted={checkIfHighest(item, 'defense', highestValues)}
      >
        {item.baseStats.defense}
      </CompareText> */}
      <CompareText>{item.baseStats.specialattack}</CompareText>
      <CompareText>{item.baseStats.specialdefense}</CompareText>
      <CompareText>{item.baseStats.speed}</CompareText>
      <CompareText>{item.gender.male}</CompareText>
      <CompareText>{item.gender.female}</CompareText>
      <CompareText>{item.gender.height}</CompareText>
      <CompareText>{item.gender.sprite}</CompareText>
      <CompareText>{item.gender.shinySprite}</CompareText>
      <CompareText>{item.gender.backSprite}</CompareText>
      <CompareText>{item.gender.shinyBackSprite}</CompareText>
    </ComparisionList>
  );
};

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
