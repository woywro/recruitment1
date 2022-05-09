import styled from 'styled-components';
import { Text } from '../Text';

export const Title = styled(Text)`
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  margin: 5px;
`;

export const Wrapper = styled.div`
  background: none;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: start;
`;
