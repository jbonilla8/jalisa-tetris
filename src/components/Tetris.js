import React, { useState, useEffect } from 'react';
import { BuildTetrisGrid, GetRandomTetromino } from './Utils/GameUtils';
import Block from './Block';

// Styled components
import {
  TetrisWrapper,
  TetrisGrid,
  LeftPanel,
  Held,
  RightPanel,
  Start,
  Reset,
  Next,
  Level,
  Score,
  ButtonsContainer
} from './styles/StyledTetris';

const Tetris = () => {
  const [grid, setGrid] = useState(BuildTetrisGrid());
  const [tetromino, setTetromino] = useState(null);

  useEffect(() => {
    console.log(tetromino);
  });

  const startButtonClickedHandler = () => {
    setTetromino(GetRandomTetromino());
  };

  const resetButtonClickedHandler = () => {
    setTetromino(null);
  };

  return (
    <TetrisWrapper>
      <LeftPanel>
        <Held>Held</Held>
        <Next>Next</Next>
      </LeftPanel>
      <TetrisGrid>{grid.map(row => row.map(block => <Block />))}</TetrisGrid>
      <RightPanel>
        <Level>Level</Level>
        <Score>Score</Score>
        <ButtonsContainer>
          <Start onClick={startButtonClickedHandler}>Start</Start>
          <Reset onClick={resetButtonClickedHandler}>Reset</Reset>
        </ButtonsContainer>
      </RightPanel>
    </TetrisWrapper>
  );
};

export default Tetris;
