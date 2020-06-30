import styled from 'styled-components';
import Galaxy from '../../images/galaxy.jpg';

export const TetrisWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url(${Galaxy}) #000;
  background-size: cover;
  overflow: hidden;
  justify-content: center;
`;

export const TetrisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 40px);
  grid-template-rows: repeat(20, 40px);
`;

export const Cell = styled.div`
  background-color: #272838;
  border: 1px solid rgba(59, 60, 84, 0.8);
  text-align: center;
  justify-content: center;
  align-items: center;
  outline: 0;
`;

export const LeftPanel = styled.div`
  display: grid;
  background-color: rgba(59, 60, 84, 0.8);
  width: 200px;
  height: 100vh;
`;

export const RightPanel = styled.div`
  display: grid;
  background-color: rgba(59, 60, 84, 0.8);
  width: 200px;
  height: 100vh;
  justify-content: center;
`;

export const Next = styled.div`
  color: #9bd4ba;
`;

export const Level = styled.div`
  color: #E9EDEA;
  font-weight: bold;
`;

export const Start = styled.button`
  width: 100px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #52ffb8;
  font-weight: bold;
`;

export const Reset = styled.button`
  width: 100px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #fe4a49;
  font-weight: bold;
`;
