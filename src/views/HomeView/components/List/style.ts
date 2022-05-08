import styled from 'styled-components';
export const ListWrapper = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
  padding: 20px;
`;

export const PokemonListItem = styled.li`
  background: white;
  box-shadow: ${(props) => props.theme.shadow};
  padding: 10px;
  border-radius: 20px;
  font-size: 30px;
  margin: 2px;
  cursor: pointer;
  text-align: center;
  width: 100%;
`;
