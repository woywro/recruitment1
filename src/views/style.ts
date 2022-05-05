import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div<{ width: string }>`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: ${(props) => (props.width ? props.width : '100%')};
`;
