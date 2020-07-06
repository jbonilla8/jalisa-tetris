import React, { useState, useEffect, Fragment } from 'react';
import {
  BuildTetrisGrid,
  GetRandomTetromino,
  DrawRandomTetromino
} from './Utils/GameUtils';
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
  const [grid, setGrid] = useState([]);
  const [tetromino, setTetromino] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    console.log(tetromino);
    setGrid(BuildTetrisGrid());
  }, []);

  const startButtonClickedHandler = () => {
    const tetromino = GetRandomTetromino();
    DrawRandomTetromino(tetromino, grid);
    setGrid([...grid]);
    setButtonDisabled(true);
  };

  const resetButtonClickedHandler = () => {
    setTetromino(null);
  };

  const styledGrid = grid.map(col => col.map(block => <Block {...block} />));

  console.log(styledGrid);
  return (
    <TetrisWrapper>
      <LeftPanel>
        <Held>Held</Held>
        <Next>Next</Next>
      </LeftPanel>
      <TetrisGrid>{styledGrid}</TetrisGrid>
      <RightPanel>
        <Level>Level</Level>
        <Score>Score</Score>
        <ButtonsContainer>
          <Start onClick={startButtonClickedHandler} disabled={buttonDisabled}>
            Start
          </Start>
          <Reset onClick={resetButtonClickedHandler}>Reset</Reset>
        </ButtonsContainer>
      </RightPanel>
    </TetrisWrapper>
  );
};

export default Tetris;
