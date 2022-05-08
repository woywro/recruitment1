import { Text } from '../../../../components/Text';
import Image from 'next/image';
import styled from 'styled-components';
import breakpoints from '../../../../theme/breakpoints';
import { PokemonInterface } from '../../../../types/PokemonInterface';

interface Props {
  pokemon: PokemonInterface;
}

export const BasicInfo = ({ pokemon }: Props) => {
  return (
    <Wrapper>
      <Text size={'big'}>BasicInfo</Text>
      <Text>name: {pokemon.species}</Text>
      <Text>color: {pokemon.color}</Text>
      <Text>male: {pokemon.gender.male}</Text>
      <Text>female: {pokemon.gender.female}</Text>
      <Text>height: {pokemon.height}</Text>
      <Text>wodth: {pokemon.weight}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  border-radius: 20px;
  grid-area: a;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  padding: 20px;
  @media only screen and ${breakpoints.device.sm} {
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;
