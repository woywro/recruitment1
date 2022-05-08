import { Button } from '../Button';
import { Text } from '../Text';
import { ErrorWrapper } from './style';
interface Props {
  msg: String;
}

export const ErrorMessage = ({ msg }: Props) => {
  return (
    <ErrorWrapper>
      <Text>{msg}</Text>
    </ErrorWrapper>
  );
};
