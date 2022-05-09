import styled from 'styled-components';
import { Text } from '../../../../components/Text';

interface Props {
  field: string;
  value: string;
  isHighlighted?: boolean;
}

export const ComparisionField = ({ field, value, isHighlighted }: Props) => {
  return (
    <CompareText isHighlighted={isHighlighted}>
      <Text bold={true}>{field}:</Text>
      <Text style={{ marginLeft: '2px' }}>{value}</Text>
    </CompareText>
  );
};
const CompareText = styled.div<{ isHighlighted?: boolean }>`
  padding: 2px;
  display: flex;
  flex-flow: row;
  background: ${(props) => (props.isHighlighted ? '#abff32' : 'none')};
  border-radius: 10px;
  margin: 2px;
`;
