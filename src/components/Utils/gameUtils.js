import { TETROMINOES } from '../Tetrominoes';

export const BuildTetrisGrid = () => {
  const blocks = [];
  const gridWidth = 10;
  const gridHeight = 20;

  for (let x = 0; x < gridWidth; x++) {
    const col = [];
    for (let y = 0; y < gridHeight; y++) {
      col.push({ x, y, blockColor: null });
    }
    blocks.push(col);
  }
  return blocks;
};

export const GetRandomTetromino = () => {
  const tetromino = 'IJLOSTZ';
  const randTetromino = tetromino[Math.floor(Math.random() * tetromino.length)];
  const result = TETROMINOES[randTetromino];

  result.x = 4;
  result.y = 0;

  return result;
};

export const DrawTetromino = (tetromino, grid) => {
  const { shape, blockColor } = tetromino;
  for (let y = 0; y < grid[0].length; y++) {
    for (let x = 0; x < grid.length; x++) {
      const blockToStyle = grid[x][y];
      blockToStyle.isPartOfCurrentTetromino = false;
      blockToStyle.blockColor = null;
    }
  }

  for (let x = 0; x < shape.length; x++) {
    for (let y = 0; y < shape[0].length; y++) {
      const blockToStyle = grid[x + tetromino.x][y + tetromino.y];
      blockToStyle.isPartOfCurrentTetromino = true;

      if (shape[y][x] > 0) {
        // todo make tetrominos col first
        blockToStyle.blockColor = blockColor;
      }
    }
  }
};

export const RotateClockwise = tetromino => {
  const { shape } = tetromino;
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < y; x++) {
      [shape[x][y], shape[y][x]] = [shape[y][x], shape[x][y]]; // flip the matrix
    }
  }
  shape.forEach(row => row.reverse()); // reverse the matrix
};

export const RotateCounterClockwise = tetromino => {
  const { shape } = tetromino;
  shape.forEach(row => row.reverse()); // reverse the matrix
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < y; x++) {
      [shape[x][y], shape[y][x]] = [shape[y][x], shape[x][y]]; // flip the matrix
    }
  }
};
