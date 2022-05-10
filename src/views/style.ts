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
  height: 100%;
  border-radius: 20px;
  overflow-y: scroll;
  @media only screen and ${breakpoints.device.sm} {
    border-radius: 0;
  }
  @media only screen and ${breakpoints.device.lg} {
  }
`;
