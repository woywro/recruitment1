import Image from 'next/image';
import { Wrapper } from './style';

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
        blurDataURL={sprite}
        loading="lazy"
      />
    </Wrapper>
  );
};
