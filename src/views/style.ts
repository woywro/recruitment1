import styled from 'styled-components';
import breakpoints from '../theme/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-flow: column;
  background: ${(props) => props.theme.colors.secondaryBg};
  border-radius: 20px;
  height: 100%;
  overflow-y: scroll;
`;
