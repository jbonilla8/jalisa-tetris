import { TETROMINOES } from '../Tetrominoes';

export const BuildTetrisGrid = () => {
  const blocks = [];
  const gridWidth = 10;
  const gridHeight = 20;

  for (let x = 0; x < gridWidth; x++) {
    const col = [];
    for (let y = 0; y < gridHeight; y++) {
      let blockColor = null;
      if (x == 4 && y > 10) {
        blockColor = 'green';
      }
      col.push({ x, y, blockColor: blockColor });
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
      // delete tetromino from grid if it was part of the grid, will be repainted later
      if (blockToStyle.isPartOfCurrentTetromino) {
        blockToStyle.isPartOfCurrentTetromino = false;
        blockToStyle.blockColor = null;
      }
    }
  }

  // paint tetromino on grid
  for (let x = 0; x < shape.length; x++) {
    for (let y = 0; y < shape[0].length; y++) {

      const gridX = x + tetromino.x;
      const gridY = y + tetromino.y;

      if (IsPointWithinGrid(gridX, gridY, grid)) {
        const blockToStyle = grid[gridX][gridY];

        if (shape[y][x] > 0 && blockToStyle !== undefined) {
          // todo make tetrominos col first
          blockToStyle.blockColor = blockColor;
          blockToStyle.isPartOfCurrentTetromino = true;
        }
      }
    }
  }
};

export const IsPointWithinGrid = (x, y, grid) => {
  return x < grid.length && x >= 0 &&
    y < grid[0].length && y >= 0;
}

export const GetTetrominoHeight = tetromino => {
  const { shape } = tetromino;

  let height = 0;

  for (let x = 0; x < shape.length; x++) {
    for (let y = 0; y < shape[0].length; y++) {
      const occupiedRow = shape[x][y] > 0;
      if (occupiedRow) {
        height += 1;
        break;
      }
    }
  }

  console.log('HEIGHT', height);

  return height;
};

export const GetTetrominoOffsets = tetromino => {
  const { shape } = tetromino;

  let offsets = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  };

  let height = 0;
  let beforeHeightEncountered = true;
  let afterHeightFound = false;

  for (let x = 0; x < shape.length; x++) {
    let columnWasEmpty = true;
    for (let y = 0; y < shape[0].length; y++) {
      const occupiedRow = shape[x][y] > 0;
      if (occupiedRow) {
        height += 1;
        beforeHeightEncountered = false;
        columnWasEmpty = false;
        break;
      }
    }
    if (columnWasEmpty && !beforeHeightEncountered) {
      afterHeightFound = true;
    }
    if (beforeHeightEncountered) {
      offsets.left++;
    }
    if (afterHeightFound) {
      offsets.right++;
    }
  }
  return offsets;
};

export const RotateClockwise = tetromino => {
  const { shape } = tetromino;
  const newArray = [];
  const n = shape.length;
  for (let x = 0; x < n; x++) {
    const row = [];
    for (let y = 0; y < n; y++) {
      row.push(shape[n - 1 - y][x]);
    }
    newArray.push(row);
  }
  tetromino.shape = newArray;
};

export const RotateCounterClockwise = tetromino => {
  const { shape } = tetromino;
  const newArray = [];
  const n = shape.length;

  for (let x = 0; x < n; x++) {
    const row = [];
    for (let y = 0; y < n; y++) {
      row.push(shape[y][n - 1 - x]);
    }
    newArray.push(row);
  }
  tetromino.shape = newArray;
};
