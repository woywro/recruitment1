import { Wrapper } from '../style';
import { List } from './components/List';

interface Props {
  pokemons: string[];
}

export const HomeView = ({ pokemons }: Props) => {
  return (
    <Wrapper>
      <List pokemons={pokemons} />
    </Wrapper>
  );
};
