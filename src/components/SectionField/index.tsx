import { Text } from '../Text';
import { CompareText } from './style';

interface Props {
  field: string;
  value: string | number;
  isHighlighted?: boolean;
}

export const SectionField = ({ field, value, isHighlighted }: Props) => {
  return (
    <CompareText isHighlighted={isHighlighted}>
      <Text bold={true}>{field}:</Text>
      <Text style={{ marginLeft: '3px' }}>{value !== null ? value : '-'}</Text>
    </CompareText>
  );
};
