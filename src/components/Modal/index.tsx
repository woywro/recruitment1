import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { Portal } from '../../wrappers/Portal';
import { CloseButton, ModalTitle, ModalWrapper, Overlay } from './style';

interface Props {
  title: string;
  isOpen: boolean;
  handleClose: () => void;
  children: JSX.Element[] | JSX.Element;
}

export const Modal = ({ title, isOpen, handleClose, children }: Props) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const closeOnEscapeKey = (e: React.KeyboardEvent<HTMLDivElement>) =>
      e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;
  return (
    <Portal selector="#portal">
      <Overlay>
        <ModalWrapper ref={ref}>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={handleClose}>x</CloseButton>
          {children}
        </ModalWrapper>
      </Overlay>
    </Portal>
  );
};
