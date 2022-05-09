import styled from 'styled-components';
import { hoverEffectBg, hoverEffectText } from '../../mixins/hoverEffects';
import breakpoints from '../../theme/breakpoints';
export const SpritesButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 30px;
  padding: 20px;
  border-radius: 20px;
  background: none;
  :hover {
    ${hoverEffectText}
  }
`;

export const SectionWrapper = styled.div`
  padding: 20px;
  height: 100%;
  width: 70%;
  align-items: start;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and ${breakpoints.device.sm} {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 100%;
  }
`;
