import React, { useState, useEffect, Fragment } from 'react';
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
  const [grid, setGrid] = useState([]);
  const [tetromino, setTetromino] = useState(null);

  useEffect(() => {
    console.log(tetromino);
    setGrid(BuildTetrisGrid());
  }, []);

  const startButtonClickedHandler = () => {
    const tetromino = GetRandomTetromino();
    const { shape, blockColor } = tetromino;
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[0].length; x++) {

        const blockToStyle = grid[x][y+4];
        blockToStyle.controlled = true;

        if(shape[x][y] > 0){
          blockToStyle.blockColor = blockColor;
        }
      }
    }
    setGrid([...grid]);
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
          <Start onClick={startButtonClickedHandler}>Start</Start>
          <Reset onClick={resetButtonClickedHandler}>Reset</Reset>
        </ButtonsContainer>
      </RightPanel>
    </TetrisWrapper>
  );
};

export default Tetris;
