import { TETROMINOES } from '../Tetrominoes';

export const BuildTetrisGrid = () => {
  const blocks = [];
  const gridWidth = 10;
  const gridHeight = 20;

  for (let y = 0; y < gridHeight; y++) {
    const row = [];
    for (let x = 0; x < gridWidth; x++) {
      row.push({ x, y, blockColor: null });
    }
    blocks.push(row);
  }
  return blocks;
};

export const Key = {
  Left: 37,
  Up: 38,
  Right: 39,
  Down: 40
};

export const GetRandomTetromino = () => {
  const tetromino = 'IJLOSTZ';
  const randTetromino = tetromino[Math.floor(Math.random() * tetromino.length)];
  const result = TETROMINOES[randTetromino];
  return result;
};

export const DrawRandomTetromino = (tetromino, grid) => {
  const { shape, blockColor } = tetromino;
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[0].length; x++) {
      const blockToStyle = grid[x][y + 4];
      blockToStyle.controlled = true;

      if (shape[x][y] > 0) {
        blockToStyle.blockColor = blockColor;
      }
    }
  }
};
