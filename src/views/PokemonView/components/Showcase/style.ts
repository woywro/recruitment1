import styled from 'styled-components';
import breakpoints from '../../../../theme/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  @media only screen and ${breakpoints.device.sm} {
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;
