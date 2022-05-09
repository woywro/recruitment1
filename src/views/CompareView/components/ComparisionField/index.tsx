import { Text } from '../../../../components/Text';
import { CompareText } from './style';

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
