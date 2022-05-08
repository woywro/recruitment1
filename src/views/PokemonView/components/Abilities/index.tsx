import { Text } from '../../../../components/Text';
import styled from 'styled-components';
import { PokemonInterface } from '../../../../types/PokemonInterface';

interface Props {
  pokemon: PokemonInterface;
}

export const Abilities = ({ pokemon }: Props) => {
  return (
    <Wrapper>
      <Text size={'big'}>Abilities</Text>
      <Row>
        <Text>first: {pokemon.abilities.first}</Text>
        <Text>second: {pokemon.abilities.second}</Text>
        <Text>hidden: {pokemon.abilities.hidden}</Text>
      </Row>
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
  grid-area: c;
  height: 100%;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;
