import styled from 'styled-components';
import { hoverEffectText } from '../../../../mixins/hoverEffects';
export const ListWrapper = styled.ol`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
  padding: 20px;
`;

export const PokemonListItem = styled.li`
  border-radius: 20px;
  font-size: 30px;
  margin: 2px;
  cursor: pointer;
  font-size: 15px;
  :hover {
    ${hoverEffectText}
  }
`;
