import React, { useState, useEffect, useRef } from 'react';
import {
  BuildTetrisGrid,
  GetRandomTetromino,
  DrawTetromino,
  RotateClockwise,
  RotateCounterClockwise,
  GetTetrominoHeight,
  GetTetrominoOffsets,
  IsPointWithinGrid,
  CheckForCollision
} from './Utils/gameUtils';
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
    window.addEventListener("keydown", MoveTetromino);

    return () => {
      window.removeEventListener("keydown", MoveTetromino);
    };
  }, [isGameStarted])

  useEffect(() => {
    console.log('CURRENT TETROMINO', tetrominoRef.current);
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
        if (!CheckForCollision(tetrominoRef, grid, setGrid)) {
          tetrominoRef.current.y += 1;
        }
        DrawTetromino(tetrominoRef.current, grid);
        setGrid([...grid]);
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
        const { left } = GetTetrominoOffsets(tetrominoRef.current);
        if (tetrominoRef.current.x + left > 0) {
          tetrominoRef.current.x -= 1;
        }
      } else if (keyCode === 38 || keyCode === 88) {
        RotateClockwise(tetrominoRef.current);
      } else if (keyCode === 18 || keyCode === 90) {
        RotateCounterClockwise(tetrominoRef.current);
      } else if (keyCode === 39) {
        const { right } = GetTetrominoOffsets(tetrominoRef.current);
        if (tetrominoRef.current.x + tetrominoRef.current.shape.length - right < 10) {
          tetrominoRef.current.x += 1;
        }
      } else if (keyCode === 40) {
        if (!CheckForCollision(tetrominoRef, grid, setGrid)) {
          tetrominoRef.current.y += 1;
        }
      } else if (keyCode === 32) {
        alert('hard drop');
      }
      DrawTetromino(tetrominoRef.current, grid);
      setGrid([...grid]);
    }
  };

  console.log(grid);
  console.log(styledGrid);

  return (
    <TetrisWrapper>
      <LeftPanel>
        {/* <Held>Held</Held>
        <Next>Next</Next>
        <Time>Time</Time> */}
      </LeftPanel>
      <TetrisGrid>{styledGrid}</TetrisGrid>
      <RightPanel>
        {/* <Level>Level</Level>
        <Score>Score</Score> */}
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
