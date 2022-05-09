import { Text } from '../Text';
import { ErrorWrapper } from './style';
interface Props {
  msg: string;
}

export const ErrorMessage = ({ msg }: Props) => {
  return (
    <ErrorWrapper>
      <Text>{msg}</Text>
    </ErrorWrapper>
  );
};
