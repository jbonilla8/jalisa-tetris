import React, { useState } from 'react';
import { BuildTetrisGrid, GetRandomTetromino } from './Utils/GameUtils';
import Block from './Block';

// Styled components
import {
  TetrisWrapper,
  TetrisGrid,
  LeftPanel,
  Hold,
  RightPanel,
  Start,
  Reset,
  Next,
  Level,
  Score,
  ButtonsContainer
} from './styles/StyledTetris';

const Tetris = () => {
  const [blocks, setBlocks] = useState(BuildTetrisGrid());
  const [tetromino, setTetromino] = useState(GetRandomTetromino());

  const startButtonClickedHandler = () => {
    alert(tetromino);
  };

  return (
    <TetrisWrapper>
      <LeftPanel>
        <Hold>Hold</Hold>
      </LeftPanel>
      <TetrisGrid>{blocks.map(row => row.map(block => <Block />))}</TetrisGrid>
      <RightPanel>
        <Next>Next</Next>
        <Level>Level</Level>
        <Score>Score</Score>
        <ButtonsContainer>
          <Start onClick={startButtonClickedHandler}>Start</Start>
          <Reset>Reset</Reset>
        </ButtonsContainer>
      </RightPanel>
    </TetrisWrapper>
  );
};

export default Tetris;
