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
  letter-spacing: 3px;
  color: white;
`;

export const TetrisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 40px);
  grid-template-rows: repeat(20, 40px);
`;

export const LeftPanel = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  background-color: rgba(59, 60, 84, 0.8);
  width: 210px;
  height: 100vh;
  justify-items: center;
  align-items: center;
`;

export const Held = styled.div`
  font-weight: bold;
`;

export const RightPanel = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  background-color: rgba(59, 60, 84, 0.8);
  width: 210px;
  height: 100vh;
  justify-items: center;
  align-items: center;
`;

export const Next = styled.div`
  font-weight: bold;
  grid-row: 1/2;
`;

export const Level = styled.div`
  font-weight: bold;
  grid-row: 2/3;
`;

export const Score = styled.div`
  font-weight: bold;
  grid-row: 3/4;
`;

export const ButtonsContainer = styled.div`
  grid-row: 4/5;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
`;

export const Start = styled.button`
  width: 100px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #52ffb8;
  font-weight: bold;
  outline: none;
  grid-row: 1/2;
  margin-bottom: 1rem;

  &:hover {
    background-color: #00e083;
  }
`;

export const Reset = styled.button`
  width: 100px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #fe4a49;
  font-weight: bold;
  outline: none;
  grid-row: 2/3;

  &:hover {
    background-color: #df0101;
  }
`;
