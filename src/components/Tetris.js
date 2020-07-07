import React, { useState, useEffect, Fragment } from 'react';
import {
  BuildTetrisGrid,
  GetRandomTetromino,
  DrawTetromino,
  MoveTetromino
} from './Utils/GameUtils';
import Block from './Block';

// Styled components
import {
  TetrisWrapper,
  TetrisGrid,
  LeftPanel,
  Held,
  Next,
  Time,
  RightPanel,
  Start,
  Reset,
  Level,
  Score,
  ButtonsContainer
} from './styles/StyledTetris';

const Tetris = () => {
  const [grid, setGrid] = useState([]);
  const [tetromino, setTetromino] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    console.log(tetromino);
    setGrid(BuildTetrisGrid());
  }, []);

  const startButtonClickedHandler = () => {
    const tetromino = GetRandomTetromino();
    DrawTetromino(tetromino, grid);
    setGrid([...grid]);
    setTetromino(tetromino);
    setButtonDisabled(true);
    setIsGameStarted(true);
  };

  useEffect(() => {
    if (isGameStarted) {
      const interval = setInterval(() => {
        tetromino.y += 1;
        DrawTetromino(tetromino, grid);
        setTetromino({ ...tetromino });
        console.log(tetromino);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isGameStarted]);

  const resetButtonClickedHandler = () => {
    setTetromino(null);
  };

  const styledGrid = [];
  if (grid !== undefined && grid[0] !== undefined) {
    for (let y = 0; y < grid[0].length; y++) {
      for (let x = 0; x < grid.length; x++) {
        styledGrid.push(<Block {...grid[x][y]} />);
      }
    }
  }

  console.log(grid);

  console.log(styledGrid);
  return (
    <TetrisWrapper role="button" tabIndex="0" onKeyDown={e => MoveTetromino(e)}>
      <LeftPanel>
        <Held>Held</Held>
        <Next>Next</Next>
        <Time>Time</Time>
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
