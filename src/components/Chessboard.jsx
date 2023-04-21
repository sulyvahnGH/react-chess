import "../styles/chessboard.css";

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const RANKS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function Chessboard({ size = 800 }) {
  let board = [];

  for (let i = RANKS.length - 1; i > 0; i--) {
    for (let j = 0; j < FILES.length; j++) {
      const n = j + i + 2;

      if (n % 2 === 0) {
        board.push(
          <div
            key={`${i}-${j}`}
            style={{ width: `${size / 8}px`, height: `${size / 8}px` }}
            className="tile white-tile"
          >
            {RANKS[i]}
            {FILES[j]}
          </div>
        );
      } else {
        board.push(
          <div
            key={`${i}-${j}`}
            style={{ width: `${size / 8}px`, height: `${size / 8}px` }}
            className="tile black-tile"
          >
            {RANKS[i]}
            {FILES[j]}
          </div>
        );
      }
    }
  }

  return (
    <div
      className="chessboard"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {board}
    </div>
  );
}
