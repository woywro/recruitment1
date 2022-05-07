import { List } from './components/List';

interface Props {
  pokemons: string[];
}

export const HomeView = ({ pokemons }: Props) => {
  return (
    <>
      <List pokemons={pokemons} />
    </>
  );
};
