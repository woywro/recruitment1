import styled from 'styled-components';
import { hoverEffectBg } from '../../../../mixins/hoverEffects';

export const Wrapper = styled.div`
  min-width: 250px;
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

export const List = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  list-style: none;
  display: flex;
  flex-flow: column;
  jusitify-content: flex-start;
  align-items: start;
  padding: 10px;
  position: relative;
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 5px;
  cursor: pointer;
  :hover {
    ${hoverEffectBg}
  }
`;
