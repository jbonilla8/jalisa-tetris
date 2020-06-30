import React, { useState } from 'react';
import { buildTetrisGrid } from './Utils/gameUtils';

// Styled components
import {
  TetrisWrapper,
  TetrisGrid,
  Cell,
  RightPanel,
  Start,
  Reset,
  Level
} from './styles/StyledTetris';

const Tetris = () => {
  const [cells, setCells] = useState(buildTetrisGrid());

  return (
    <TetrisWrapper>
      <TetrisGrid>{cells.map(row => row.map(cell => <Cell />))}</TetrisGrid>
      <RightPanel>
        <Level>Level:</Level>
        <Start>Start</Start>
        <Reset>Reset</Reset>
      </RightPanel>
    </TetrisWrapper>
  );
};

export default Tetris;
