import styled from 'styled-components';

export const CompareText = styled.div<{ isHighlighted?: boolean }>`
  padding: 2px;
  display: flex;
  flex-flow: row;
  background: ${(props) => (props.isHighlighted ? '#abff32' : 'none')};
  border-radius: 10px;
  margin: 2px;
`;
