import { PageWrapper } from '../style';
import { List } from './components/List';

interface Props {
  pokemons: string[];
}

export const HomeView = ({ pokemons }: Props) => {
  return (
    <PageWrapper>
      <List pokemons={pokemons} />
    </PageWrapper>
  );
};
