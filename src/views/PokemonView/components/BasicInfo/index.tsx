import { Text } from '../../../../components/Text';
import Image from 'next/image';
import styled from 'styled-components';

export const BasicInfo = ({ pokemon }) => {
  return (
    <Wrapper>
      <Image
        src={pokemon.sprite}
        alt={pokemon.species}
        width="150px"
        height="150px"
      ></Image>
      <TextWrapper>
        <Text size={'big'}>{pokemon.species}</Text>
        <Text>color: {pokemon.color}</Text>
        <Text>male: {pokemon.gender.male}</Text>
        <Text>female: {pokemon.gender.female}</Text>
        <Text>height: {pokemon.height}</Text>
        <Text>wodth: {pokemon.weight}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  border-radius: 20px;
  grid-area: a;
  display: flex;
  width: 100%;
  height: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  padding: 20px;
`;

const TextWrapper = styled.div``;
