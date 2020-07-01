import React, { useState } from 'react';
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
  const [blocks, setBlocks] = useState(BuildTetrisGrid());
  const [tetromino, setTetromino] = useState(GetRandomTetromino());

  const startButtonClickedHandler = () => {
    alert(tetromino);
  };

  return (
    <TetrisWrapper>
      <LeftPanel>
        <Held>Held</Held>
        <Next>Next</Next>
      </LeftPanel>
      <TetrisGrid>{blocks.map(row => row.map(block => <Block />))}</TetrisGrid>
      <RightPanel>
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
