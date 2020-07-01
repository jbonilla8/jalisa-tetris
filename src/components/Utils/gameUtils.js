import { Tetrominoes } from '../Tetrominoes';

export const BuildTetrisGrid = () => {
  const blocks = [];
  const gridWidth = 10;
  const gridHeight = 20;

  for (let x = 0; x < gridWidth; x++) {
    const row = [];
    for (let y = 0; y < gridHeight; y++) {
      row.push({ x, y });
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
  const result = JSON.stringify(Tetrominoes[randTetromino]);
  return result;
};
