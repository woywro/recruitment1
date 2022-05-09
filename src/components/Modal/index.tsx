import React, { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { Portal } from '../../wrappers/Portal';
import { CloseButton, ModalTitle, ModalWrapper, Overlay } from './style';

interface Props {
  title: string;
  handleClose: () => void;
  children: JSX.Element[] | JSX.Element;
}

export const Modal = ({ title, handleClose, children }: Props) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  useClickOutside(ref, () => {
    handleClose();
  });

  return (
    <Portal selector="#portal">
      <Overlay>
        <ModalWrapper ref={ref}>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={handleClose}>x</CloseButton>
          <>{children}</>
        </ModalWrapper>
      </Overlay>
    </Portal>
  );
};
