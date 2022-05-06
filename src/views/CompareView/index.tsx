import { PageWrapper } from '../style';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import React, { useEffect, useState } from 'react';
import { Text } from '../../components/Text';
import { isAbsolute } from 'path';

export const CompareView = ({ pokemons }) => {
  const [comparisionSlots, setComparisionSlots] = useState([
    { id: 1, item: null },
  ]);
  const [pokemonNames, setPokemonNames] = useState(pokemons);

  useEffect(() => {
    setPokemonNames(pokemons);
  }, [pokemons]);

  const handleAdd = () => {
    setComparisionSlots([
      ...comparisionSlots,
      { id: Math.round(Math.random() * 1000), item: null },
    ]);
  };

  const handleDeleteSlot = (e) => {
    const itemsFiltered = comparisionSlots.filter((x) => x.id !== e.id);
    setComparisionSlots(itemsFiltered);
  };

  const handleAddToComparision = (e, pokemon) => {
    const res = comparisionSlots.map((el) =>
      el.id === e.id ? { ...el, item: pokemon } : el
    );
    setComparisionSlots(res);
    console.log(res);
  };

  return (
    <>
      <CompareWrapper>
        {comparisionSlots.map((e) => {
          return (
            <Slot>
              <Button onClick={() => handleDeleteSlot(e)}>remove</Button>
              {/* <div>{e.id}</div> */}
              {e.item == null ? (
                <List>
                  {pokemons.map((pokemon: string) => {
                    return (
                      <ListItem
                        onClick={() => handleAddToComparision(e, pokemon)}
                      >
                        {pokemon}
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <div>{e.item}</div>
              )}
            </Slot>
          );
        })}
        <AddSlotButton onClick={handleAdd}>Add +</AddSlotButton>
      </CompareWrapper>
    </>
  );
};

const CompareWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  padding: 20px;
`;

const List = styled.div`
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
