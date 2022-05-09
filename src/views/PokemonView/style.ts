import styled from 'styled-components';
import { hoverEffectBg } from '../../mixins/hoverEffects';
import breakpoints from '../../theme/breakpoints';
export const SpritesButton = styled.button`
  border:none;
  cursor:pointer;
  width:100%;
  height:100%;
  background:none;
  font-size: 30px;
  background: ${(props) => props.theme.colors.primary}
  grid-area: 'e';
  :hover{
    ${hoverEffectBg}
  }
`;

export const Grid = styled.div`
  overflow-y: scroll;
  width: 100%;
  padding: 20px;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'a a'
    'b c'
    'd e';
  gap: 20px;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-areas:
      'i i'
      'a a'
      'b b'
      'c c'
      'd d';
  }
  @media only screen and ${breakpoints.device.lg} {
  }
`;
