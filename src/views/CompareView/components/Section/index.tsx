import styled from 'styled-components';
import { Text } from '../../../../components/Text';

interface Props {
  children: JSX.Element[];
  title?: string;
}

export const Section = ({ children, title }: Props) => {
  return (
    <Wrapper>
      {title !== undefined && <Title size={'big'}>{title}</Title>}
      {children}
    </Wrapper>
  );
};

const Title = styled(Text)`
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  margin: 5px;
`;

const Wrapper = styled.div`
  background: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
