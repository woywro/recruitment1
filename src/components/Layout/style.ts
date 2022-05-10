import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';

export const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.gradient};
`;

export const ChildrenWrapper = styled.div`
  width: 100%;
  height: calc(100% - (80px));
`;

export const ViewBox = styled.div`
  width: 80vw;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: start;
  border-radius: 20px;
  box-shadow: 0px 0px 0px 18px rgba(255, 255, 255, 0.3);
  background: ${(props) => props.theme.colors.primaryBg};
  @media only screen and ${breakpoints.device.sm} {
    width: 100vw;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    flex-flow: column;
    overflow-y: scroll;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 100vw;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
    flex-flow: column;
    overflow-y: scroll;
  }
`;
