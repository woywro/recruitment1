import { Title, Wrapper } from './style';

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
