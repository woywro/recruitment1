import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  sprite: string;
}

export const SpriteElement = ({ sprite }: Props) => {
  return (
    <Wrapper>
      <Image
        src={sprite}
        alt={sprite}
        width="150px"
        height="150px"
        placeholder="blur"
        blurDataURL="/assets/placeholder.png"
        loading="lazy"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
