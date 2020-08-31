import styled from 'styled-components';
import Galaxy from '../../images/galaxy-min.jpg';

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
  grid-template-columns: repeat(10, 5vh);
  grid-template-rows: repeat(20, 5vh);
`;

export const LeftPanel = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, 33.33%);
  background-color: rgba(59, 60, 84, 0.8);
  width: 18%;
  height: 100vh;
  justify-items: center;
  align-items: center;
  font-weight: bold;
`;

export const Held = styled.div`
  grid-row: 1/2;
`;

export const Next = styled.div`
  grid-row: 2/3;
`;

export const Time = styled.div`
  grid-row: 3/4;
`;

export const RightPanel = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, 33.33%);
  background-color: rgba(59, 60, 84, 0.8);
  width: 18%;
  height: 100vh;
  justify-items: center;
  align-items: center;
`;

export const Level = styled.div`
  font-weight: bold;
  grid-row: 1/2;
`;

export const Score = styled.div`
  font-weight: bold;
  grid-row: 2/3;
`;

export const ButtonsContainer = styled.div`
  grid-row: 3/4;
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
  background-color: ${props => props.disabled ? 'gray' : '#52ffb8'};
  font-weight: bold;
  outline: none;
  grid-row: 1/2;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${props => props.disabled ? 'gray' : '#00e083'};
  }
`;

export const Reset = styled.button`
  width: 100px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.disabled ? 'gray' : '#fe4a49'};
  font-weight: bold;
  outline: none;
  grid-row: 2/3;

  &:hover {
    background-color: ${props => props.disabled ? 'gray' : '#df0101'};
  }
`;
