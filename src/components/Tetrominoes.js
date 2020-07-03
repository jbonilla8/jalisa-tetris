export const TETROMINOES = {
  // 0: { shape: [[0]], blockColor: '#272838' },
  T: {
    shape: [[1, 1, 1], [0, 1, 0], [0, 0, 0]],
    blockColor: 'red'
  },
  Z: {
    shape: [[0, 0, 0], [2, 2, 0], [0, 2, 2]],
    blockColor: 'blue'
  },
  S: {
    shape: [[0, 0, 0], [0, 3, 3], [3, 3, 0]],
    blockColor: 'purple'
  },
  O: {
    shape: [[4, 4], [4, 4]],
    blockColor: 'yellow'
  },
  L: {
    shape: [[0, 5, 0], [0, 5, 0], [0, 5, 5]],
    blockColor: 'lime'
  },
  J: {
    shape: [[0, 6, 0], [0, 6, 0], [6, 6, 0]],
    blockColor: 'orange'
  },
  I: {
    shape: [[0, 7, 0, 0], [0, 7, 0, 0], [0, 7, 0, 0], [0, 7, 0, 0]],
    blockColor: 'cyan'
  }
};
