import { Text } from '../../../../components/Text';
import styled from 'styled-components';
export const BaseStats = ({ pokemon }) => {
  return (
    <Wrapper>
      <Text size={'big'}>BaseStats</Text>
      <Text>hp: {pokemon.baseStats.hp}</Text>
      <Text>attack: {pokemon.baseStats.attack}</Text>
      <Text>defense: {pokemon.baseStats.defense}</Text>
      <Text>specialattack: {pokemon.baseStats.specialattack}</Text>
      <Text>specialdefense: {pokemon.baseStats.specialdefense}</Text>
      <Text>speed: {pokemon.baseStats.speed}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  border-radius: 20px;
  display: flex;
  flex-flow: column;
  box-shadow: ${(props) => props.theme.shadow};
  padding: 20px;
  grid-area: b;
  height: 100%;
  width: 100%;
`;
