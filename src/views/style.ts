import styled from 'styled-components';
import breakpoints from '../theme/breakpoints';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  @media only screen and ${breakpoints.device.sm} {
    overflow-y: scroll;
  }
`;

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
