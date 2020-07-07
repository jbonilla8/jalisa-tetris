import React, { useState, useEffect, useRef } from 'react';
import {
  BuildTetrisGrid,
  GetRandomTetromino,
  DrawTetromino
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
  const tetrominoRef = useRef(null);
  const [startButtonDisabled, setStartButtonDisabled] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [resetButtonDisabled, setResetButtonDisabled] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    console.log(tetrominoRef.current);
    setGrid(BuildTetrisGrid());
    setReset();
    setResetButtonDisabled(true);
  }, [reset]);

  const startButtonClickedHandler = () => {
    tetrominoRef.current = GetRandomTetromino();
    DrawTetromino(tetrominoRef.current, grid);
    setGrid([...grid]);
    setStartButtonDisabled(true);
    setResetButtonDisabled(false);
    setIsGameStarted(true);
  };

  useEffect(() => {
    if (isGameStarted) {
      const interval = setInterval(() => {
        tetrominoRef.current.y += 1;
        DrawTetromino(tetrominoRef.current, grid);
        setGrid([...grid]);
        console.log(tetrominoRef.current);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isGameStarted]);

  const resetButtonClickedHandler = () => {
    setReset(true);
    setIsGameStarted(false);
    setStartButtonDisabled(false);
    setResetButtonDisabled(true);
    setGrid([...grid]);
    // fix bug where not resetting 2nd time around
  };

  const styledGrid = [];
  if (grid !== undefined && grid[0] !== undefined) {
    for (let y = 0; y < grid[0].length; y++) {
      for (let x = 0; x < grid.length; x++) {
        styledGrid.push(<Block {...grid[x][y]} />);
      }
    }
  }

  const MoveTetromino = ({ keyCode }) => {
    if (isGameStarted) {
      if (keyCode === 37) {
        tetrominoRef.current.x -= 1;
      } else if (keyCode === 38) {
        // rotate tetromino
        alert('up');
      } else if (keyCode === 39) {
        tetrominoRef.current.x += 1;
      } else if (keyCode === 40) {
        // move tetromino down
        alert('down');
      } else if (keyCode === 32) {
        // spacebar moves tetromino to bottom immediately
      }
      DrawTetromino(tetrominoRef.current, grid);
      setGrid([...grid]);
    }
  };

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
          <Start
            onClick={startButtonClickedHandler}
            disabled={startButtonDisabled}
          >
            Start
          </Start>
          <Reset
            onClick={resetButtonClickedHandler}
            disabled={resetButtonDisabled}
          >
            Reset
          </Reset>
        </ButtonsContainer>
      </RightPanel>
    </TetrisWrapper>
  );
};

export default Tetris;
