export const buildTetrisGrid = () => {
  const cells = [];
  const gridWidth = 12;
  const gridHeight = 20;

  for (let x = 0; x < gridWidth; x++) {
    const row = [];
    for (let y = 0; y < gridHeight; y++) {
      row.push({x, y});
    }
    cells.push(row);
  }
  return cells;
};
