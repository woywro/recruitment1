import styled from 'styled-components';
import { Text } from '../../../../components/Text';

export const PokemonDataCard = ({ item }) => {
  return (
    <ComparisionList>
      <Text>{item.species}</Text>
      <Text>{item.types}</Text>
      <Text>{item.abilities.first}</Text>
      <Text>{item.abilities.second}</Text>
      <Text>{item.abilities.hidden}</Text>
      <Text>{item.baseStats.hp}</Text>
      <Text>{item.baseStats.attack}</Text>
      <Text>{item.baseStats.defense}</Text>
      <Text>{item.baseStats.specialattack}</Text>
      <Text>{item.baseStats.specialdefense}</Text>
      <Text>{item.baseStats.speed}</Text>
      <Text>{item.gender.male}</Text>
      <Text>{item.gender.female}</Text>
      <Text>{item.gender.height}</Text>
      <Text>{item.gender.sprite}</Text>
      <Text>{item.gender.shinySprite}</Text>
      <Text>{item.gender.backSprite}</Text>
      <Text>{item.gender.shinyBackSprite}</Text>
    </ComparisionList>
  );
};

const List = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  jusitify-content: flex-start;
  align-items: start;
  padding: 10px;
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

const ListItem = styled.div`
  width: 100%;
  padding: 5px;
`;

const Slot = styled.div`
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

const AddSlotButton = styled.button`
  width: 200px;
  height: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  padding: 5px;
  background: white;
  margin: 10px;
  border-radius: 20px;
  flex: 0 0 auto;
  cursor: pointer;
  border: none;
  font-size: 24px;
  font-weight: bold;
`;
