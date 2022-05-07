import styled from 'styled-components';
export const ListWrapper = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  list-style: none;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PokemonListItem = styled.li`
  background: white;
  box-shadow: ${(props) => props.theme.shadow};
  padding: 10px;
  margin: 2px;
  cursor: pointer;
`;
