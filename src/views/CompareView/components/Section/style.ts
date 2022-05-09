import styled from 'styled-components';
import { Text } from '../../../../components/Text';
export const Title = styled(Text)`
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  margin: 5px;
`;

export const Wrapper = styled.div`
  background: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
