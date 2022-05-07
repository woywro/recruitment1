import styled from 'styled-components';
import { Button } from '../../../../components/Button';
import { PokemonDataCard } from '../PokemonDataCard';
import { PokemonChoiceCard } from '../PokemonChoiceCard';

export const PokemonCard = ({
  pokemons,
  comparisionCards,
  setComparisionCards,
  getPokemon,
  comparisionCard,
}) => {
  const handleDeleteSlot = (e) => {
    const itemsFiltered = comparisionCards.filter((x) => x.id !== e.id);
    setComparisionCards(itemsFiltered);
  };

  return (
    <Slot>
      <Button onClick={() => handleDeleteSlot(comparisionCard)}>remove</Button>
      {comparisionCard.item == null ? (
        <PokemonChoiceCard
          pokemons={pokemons}
          comparisionCards={comparisionCards}
          setComparisionCards={setComparisionCards}
          getPokemon={getPokemon}
          id={comparisionCard.id}
        />
      ) : (
        <PokemonDataCard item={comparisionCard.item} />
      )}
    </Slot>
  );
};

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
