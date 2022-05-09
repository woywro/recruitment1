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
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 100%;
  overflow-y: scroll;
  @media only screen and ${breakpoints.device.sm} {
    border-radius: 0;
    height: 100%;
  }
  @media only screen and ${breakpoints.device.lg} {
  }
`;
