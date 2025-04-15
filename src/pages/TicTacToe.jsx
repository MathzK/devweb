import { useState } from 'react';

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  function handleClick(index) {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function restartGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div style={styles.container}>
      <h2>Jogo da Velha</h2>
      <div style={styles.board}>
        {squares.map((value, index) => (
          <button key={index} onClick={() => handleClick(index)} style={styles.square}>
            {value}
          </button>
        ))}
      </div>
      <p style={styles.status}>
        {winner ? `Vencedor: ${winner}` : squares.every(Boolean) ? 'Empate!' : `Próximo: ${xIsNext ? 'X' : 'O'}`}
      </p>
      <button onClick={restartGame} style={styles.button}>Reiniciar</button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6]             // diagonais
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gap: '5px',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  square: {
    width: '100px',
    height: '100px',
    fontSize: '2rem',
    cursor: 'pointer',
  },
  status: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
