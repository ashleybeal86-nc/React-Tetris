export const TETROMINOS = {
    0: { shape: [[0]], color: "0, 0, 0" },
    I: {
      shape: [
        [0, "I", 0, 0],
        [0, "I", 0, 0],
        [0, "I", 0, 0],
        [0, "I", 0, 0]
      ],
      color: "121, 200, 210"
    },
    J: {
      shape: [
        [0, "J", 0],
        [0, "J", 0],
        ["J", "J", 0]
      ],
      color: "25, 118, 210"
    },
    L: {
      shape: [
        [0, "L", 0],
        [0, "L", 0],
        [0, "L", "L"]
      ],
      color: "225, 179, 112"
    },
    O: {
      shape: [
        ["O", "O"],
        ["O", "O"]
      ],
      color: "225, 213, 79"
    },
    S: {
      shape: [
        [0, "S", "S"],
        ["S", "S", 0],
        [0, 0, 0]
      ],
      color: "174, 213, 129"
    },
    T: {
      shape: [
        [0, 0, 0],
        ["T", "T", "T"],
        [0, "T", 0]
      ],
      color: "186, 104, 200"
    },
    Z: {
      shape: [
        ["Z", "Z", 0],
        [0, "Z", "Z"],
        [0, 0, 0]
      ],
      color: "201, 86, 84"
    }
  };
  
  export const randomTetromino = () => {
    const tetrominos = "IJLOSTZ";
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
  };
  