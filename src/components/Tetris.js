import React, { useState, useEffect, useRef } from 'react';
import {
  BuildTetrisGrid,
  GetRandomTetromino,
  DrawTetromino,
  RotateClockwise,
  RotateCounterClockwise,
  GetTetrominoHeight,
  GetTetrominoOffsets,
  IsPointWithinGrid
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
  const [collided, setCollided] = useState(false);

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
        const tetromino = tetrominoRef.current;
        const { shape, blockColor } = tetromino;

        let collisionDetected = false;

        for (let x = 0; x < shape.length; x++) {
          for (let y = 0; y < shape[0].length; y++) {

            const gridX = x + tetromino.x;
            const gridY = y + tetromino.y;

            if (IsPointWithinGrid(gridX, gridY, grid) &&
              IsPointWithinGrid(gridX, gridY + 1, grid)) {

              const block = grid[gridX][gridY];
              const blockBelow = grid[gridX][gridY + 1];

              if (
                blockBelow.blockColor !== null &&
                !blockBelow.isPartOfCurrentTetromino &&
                block.blockColor !== null
              ) {
                collisionDetected = true;
              }
            }
          }
        }

        if (!collisionDetected) {
          tetrominoRef.current.y += 1;
        } else {
          tetrominoRef.current = GetRandomTetromino();
          for (let y = 0; y < grid[0].length; y++) {
            for (let x = 0; x < grid.length; x++) {
              const blockToStyle = grid[x][y];
              blockToStyle.isPartOfCurrentTetromino = false;
            }
          }
        }

        // const topOfTetromino = tetrominoRef.current.y;
        // const tetrominoHeight = GetTetrominoHeight(tetrominoRef.current);
        // const bottomOfTetromino = topOfTetromino + tetrominoHeight;
        // if (bottomOfTetromino >= grid[0].length - os) {
        //   setCollided(true);
        // } else {
        //   DrawTetromino(tetrominoRef.current, grid);
        //   console.log('CURRENT TETROMINO', tetrominoRef.current);
        // }

        DrawTetromino(tetrominoRef.current, grid);

        setGrid([...grid]);
        console.log(
          'TETROMINO HEIGHT',
          GetTetrominoHeight(tetrominoRef.current)
        );
        console.log('OFFSETS', GetTetrominoOffsets(tetrominoRef.current));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isGameStarted, collided]);

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
      } else if (keyCode === 38 || keyCode === 88) {
        RotateClockwise(tetrominoRef.current);
      } else if (keyCode === 18 || keyCode === 90) {
        RotateCounterClockwise(tetrominoRef.current);
      } else if (keyCode === 39) {
        tetrominoRef.current.x += 1;
      } else if (keyCode === 40) {
        tetrominoRef.current.y += 1;
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
