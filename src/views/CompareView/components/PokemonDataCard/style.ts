import styled from 'styled-components';

export const Wrapper = styled.li`
  min-width: 200px;
  position: relative;
  height: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  padding: 10px;
  background: white;
  margin: 10px;
  border-radius: 20px;
  flex: 0 0 auto;
`;

export const ComparisionList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  jusitify-content: center;
  align-items: center;
  padding: 10px;
`;
