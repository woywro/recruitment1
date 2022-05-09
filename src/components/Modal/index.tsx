import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { Portal } from '../../wrappers/Portal';
import { CloseButton, ModalTitle, ModalWrapper, Overlay } from './style';

interface Props {
  title: string;
  handleClose: () => void;
  children: JSX.Element[] | JSX.Element;
}

export const Modal = ({ title, handleClose, children }: Props) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const closeOnEscapeKey = (e: React.KeyboardEvent<HTMLDivElement>) =>
      e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

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
