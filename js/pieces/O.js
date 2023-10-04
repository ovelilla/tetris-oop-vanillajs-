import Tetromino from "../Tetromino.js";

class O extends Tetromino {
  constructor(cols) {
    const shape = [
      [0, 0],
      [1, 0],
      [0, 1],
      [1, 1],
    ];

    const pivot = { x: 0.5, y: 0.5 };

    const maxWidth =
      Math.max(...shape.map((point) => point[0])) -
      Math.min(...shape.map((point) => point[0])) +
      1;

    const initialX = Math.floor((cols - maxWidth) / 2);

    super({
      x: initialX,
      y: 0,
      color: "#ffff00",
      shape: shape,
      pivot: pivot,
    });
  }
}

export default O;
