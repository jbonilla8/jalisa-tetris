export const Tetrominoes = {
    0: { shape: [[0]], color: 'black' },
    T: {
        shape: [
            [1,1,1],
            [0,1,0],
            [0,0,0]
        ],
        color: 'red'
      },
    Z: {
        shape: [
            [0,0,0],
            [2,2,0],
            [0,2,2]
        ],
        color: 'blue'
    },
    S: {
        shape: [
            [0,0,0],
            [0,3,3],
            [3,3,0]
        ],
        color: 'purple'
    },
    O: {
        shape: [
            [4,4],
            [4,4]
        ],
        color: 'yellow'
    },
    L: {
        shape: [
            [0,5,0],
            [0,5,0],
            [0,5,5]
        ],
        color: 'lime'
    },
    J: {
        shape: [
            [0,6,0],
            [0,6,0],
            [6,6,0]
        ],
        color: 'orange'
    },
    I: {
        shape: [
            [0,7,0,0],
            [0,7,0,0],
            [0,7,0,0],
            [0,7,0,0]
        ],
        color: 'cyan'
    }
}