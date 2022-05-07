import styled from 'styled-components';
import { Text } from '../Text';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 40px;
  z-index: 1000;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  min-width: 400px;
  min-height: 300px;
  overflow-y: hidden;
`;

export const CloseButton = styled.button`
  background: none;
  margin: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 24px;
  top: 0;
  right: 0;
  position: absolute;
`;

export const ModalTitle = styled(Text)`
  margin: 10px;
  font-size: 28px;
`;
